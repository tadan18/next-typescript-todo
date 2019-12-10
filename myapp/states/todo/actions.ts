import _ from "lodash";
import { TodoItem } from "./state";
import { ADD_TODO_LIST } from "../root/actions";

export const insertTodo = (
    todos: Array<TodoItem>,
    todo: string,
) => (dispatch: any)=> {
    console.log(_.maxBy(todos, "id"))
    return dispatch({ type: ADD_TODO_LIST, todo})
}