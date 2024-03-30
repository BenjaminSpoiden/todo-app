import { db } from "@/firebase"
import { NOTES_COLLECTION } from "@/utils/constant"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { ref } from "vue"


export const onCreateNote = async (note: Note) => {
    return await addDoc(collection(db, NOTES_COLLECTION), note)
}

export const onGetNotes = async () => {
    const notes = ref<Notes>([])
    const querySnapshot = await getDocs(collection(db, NOTES_COLLECTION))
    querySnapshot.forEach(({ data }) => {
        const note = data() as Note
        if (!note.isPrivate) {
            notes.value.push(note)
        }
    })

    return notes.value
}

export const onUpdateNote = async (noteId: string, updateNote: UpdateNote, userId: string) => {
    const noteRef = doc(db, NOTES_COLLECTION, noteId)
    const noteDoc = await getDoc(noteRef)

    if (noteDoc.exists() && (noteDoc.data() as Note).userId === userId) {
        await updateDoc(noteRef, updateNote)
        return true
    } else {
        return false
    }
}

export const onDeleteNote = async (noteId: string) => {
    await deleteDoc(doc(db, NOTES_COLLECTION, noteId));
}