import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = state => state.filters.search;

export const todoListSelector = state => state.todoList;

export const filterStatusSelector = state => state.filters.status;

export const filterPrioritiesSelector = state => state.filters.priority;

export const todoRemainingSelector = createSelector(
    todoListSelector, 
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priority ) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority.length
                    ? todo.name.includes(searchText) && priority.includes(todo.priority)
                    : todo.name.includes(searchText)
            }
            return (
                todo.name.includes(searchText) && 
                ( status === 'Completed' ? todo.completed : !todo.completed ) &&
                (priority.length ? priority.includes(todo.priority): true)
            )
        })
    }
)
