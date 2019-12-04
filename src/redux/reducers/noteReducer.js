import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE } from "../actions/actions";

function noteReduecer(notes = [], action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...notes,
                {
                    id: action.id,
                    title: action.title,
                    content: action.content,
                    status: action.status
                }
            ]
        case REMOVE_NOTE:
            return notes.map(note => note.id === action.id ? { ...note, status: STATUS_INACTIVE } : note)

        default:
            return notes
    }
}

export default noteReduecer