// store/actions.ts
import { createAction } from '@reduxjs/toolkit';
import { Task } from './types';

export const addTask = createAction<Task>('tasks/addTask');
export const deleteTask = createAction<number>('tasks/deleteTask');
export const editTask = createAction<Task>('tasks/editTask'); 
