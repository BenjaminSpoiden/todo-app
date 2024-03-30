import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { ref } from "vue";

export const currentUser = ref<User | null>(null)

auth.onAuthStateChanged((user) => currentUser.value = user)

export const onSignUp = async ({ email, password }: AuthPayload) => {
    await createUserWithEmailAndPassword(auth, email, password)
}

export const onSignIn = async ({ email, password }: AuthPayload) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const onSignOut = async () => {
    await signOut(auth)
}