type Note = {
    title: string
    content: string
    userId: string
    isPrivate: boolean
}

type Notes = Array<Note>

type UpdateNote = Partial<Omit<Note, 'userId'>>