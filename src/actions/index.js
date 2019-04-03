import { ADD_TODO_ITEM, DEL_TODO_ITEM } from './actiontypes';

export const add_todo = (value) => ({type: ADD_TODO_ITEM, value: value});