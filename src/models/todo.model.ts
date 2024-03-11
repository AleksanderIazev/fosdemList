export type FilterType = 'completed' | 'active' | 'asc' | 'desc';
export type SortType = "asc" | "desc" | "none";

export interface IAddTodoPanel {
    todos: ITodo[];
    isSetTodos: (todos: ITodo[]) => void;
    filter: FilterType;
    isSetFilter: (filter: FilterType) => void;
}

export interface ITodo {
    id: string;
    title: string;
    speaker: string;
    startTime: string;
    endTime: string;
    completed: boolean;
    notes: string;
}

export interface AddTodoPanelProps {
    todo: string;
    isSetTodo: (todo: string) => void;
    todos: ITodo[];
    isSetTodos: (todos: ITodo[]) => void;
}

export interface TodoListProps {
    todos: ITodo[];
    isSetTodos: (todos: ITodo[]) => void;
}

export interface ITodoListItem {
    id: string;
    title: string;
    completed: boolean;
    speaker: string;
    startTime: string;
    endTime: string;
    todos: ITodo[];
    notes: string;
    isSetTodos: (todos: any) => void;
}

export interface IAddTodoPanel {
    todos: ITodo[];
    isSetTodos: (todos: ITodo[]) => void;
    filter: FilterType;
    isSetFilter: (filter: FilterType) => void;
}
