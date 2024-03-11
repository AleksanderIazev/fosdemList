import React, { useEffect, useState } from 'react';
import * as style from './todos.styles';
import TodoList from './TodoList/TodoList';
import FilterTodoPanel from './FilterTodoPanel/FilterTodoPanel';
import { FilterType, ITodo } from '../models/todo.model';
import DEFAULT_TODOS from '../data/DEFAULT_TODOS';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Filters<T> = Record<FilterType, (todos: T[]) => T[]>;

const filters: Filters<ITodo> = {
    "completed": (todos) => todos.filter(todo => todo.completed),
    "active": (todos) => todos.filter(todo => !todo.completed)
}

function Todo() {
    const [storagedData, setStoragedData] = useLocalStorage('todos', DEFAULT_TODOS)
    const [todos, setTodos] = useState<ITodo[]>(storagedData);
    const [filter, setFilter] = useState<FilterType>('active');

    useEffect(() => {
        setStoragedData(todos);
    }, [todos])

    const filteredTodo = (todos: ITodo[], filter: FilterType) => filters[filter](todos);

    return (
        <style.STodosWrapper>
            <style.STodosText>Events</style.STodosText>
            <FilterTodoPanel filter={filter} isSetFilter={setFilter} />
            <TodoList todos={filteredTodo(todos, filter)} isSetTodos={setTodos} />
        </style.STodosWrapper>
    );
}

export default Todo;
