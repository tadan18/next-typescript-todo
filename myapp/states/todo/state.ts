export interface TodoItem {
    id: number;
    todo: string;
    active: boolean;
    [key: string]: any;
}

export interface TodoLists {
    todos: Array<TodoItem>;
}