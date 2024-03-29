import {combineReducers} from 'redux'
import notesReducer from './noteReducer'
import visibilityReducer from './visibilityReducer'

const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer
})
export default reducers

//----------------- ของเก่า ----------------------------------
// import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions'

// const initialState = {
//   notes: []
// }

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         notes: [
//           ...state.notes,
//           {
//             id: action.id,
//             title: action.title,
//             content: action.content
//           }
//         ]
//       }
//     case REMOVE_NOTE:
//       return {
//         notes: state.notes.filter(x => x.id !== action.id)
//       }

//     default:
//       return state
//   }
// }

// export default rootReducer