/**
 * Created by vshan on 8/9/16.
 */
import { Schema, arrayOf } from 'normalizr';

export const todo = new Schema('todos');
export const arrayOfTodos = arrayOf(todo);