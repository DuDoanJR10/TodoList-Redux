export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (id) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: id
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filer/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filer/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filer/priorityFilterChange',
        payload: priorities
    }
}

