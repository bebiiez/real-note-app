import { uniqueId } from 'lodash'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const STATUS_ACTIVE = 'STATUS_ACTIVE'
export const STATUS_INACTIVE = 'STATUS_INACTIVE'
export const SHOW_ACTIVE = 'STATUS_ACTIVE'
export const SHOW_INACTIVE = 'STATUS_INACTIVE'

//action creater
export function addNote(title, content) {
  return {
    id: uniqueId(),
    type: ADD_NOTE,
    title: title,
    content: content,
    status: STATUS_ACTIVE
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

export function showActive() {
  return { type: SHOW_ACTIVE }
}

export function showInactive() {
  return { type: SHOW_INACTIVE }
}