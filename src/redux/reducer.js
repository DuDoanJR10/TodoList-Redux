import filtersReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filters: filtersReducer, 
    todoList: todoListReducer,
})

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     }
// }

export default rootReducer;
