import { TodoLists } from "./state";
import * as type from "../root/actions"

const initialState: TodoLists = {
    todos: [
        {
            id: 0,
            todo: "nothing todo",
            active: false,
        }
    ]
}

const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case type.ADD_TODO_LIST:
            console.log(state.todos)
            return state;
        default:
            return state;
    }
}

export default todoReducer;