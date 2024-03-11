import React, { useEffect, useState } from 'react';
import * as style from './todos.styles';
import TodoList from './TodoList/TodoList';
import FilterTodoPanel from './FilterTodoPanel/FilterTodoPanel';
import { FilterType, ITodo, SortType } from '../models/todo.model';
import DEFAULT_TODOS from '../data/DEFAULT_TODOS';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateDuration } from '../utils/calculateDuration';

type Filters<T> = Record<FilterType, (todos: T[], sort: SortType) => T[]>;

const filters: Filters<ITodo> = {
    "completed": (todos, sort) => {
        if(sort !== "none") {
            return filters[sort](todos.filter(todo => todo.completed), "none");
        }
    
        return todos.filter(todo => todo.completed);
    },
    "active": (todos, sort) => {
        if(sort !== "none") {
            return filters[sort](todos.filter(todo => !todo.completed), "none");
        }
    
        return todos.filter(todo => !todo.completed);
    },
    "asc": (todos) => todos.sort((aTodo, bTodo) => calculateDuration(aTodo.startTime, aTodo.endTime) - calculateDuration(bTodo.startTime, bTodo.endTime)),
    "desc": (todos) => todos.sort((aTodo, bTodo) => calculateDuration(bTodo.startTime, bTodo.endTime) - calculateDuration(aTodo.startTime, aTodo.endTime)),
}

function Todo() {
    const [storagedData, setStoragedData] = useLocalStorage('todos', DEFAULT_TODOS)
    const [todos, setTodos] = useState<ITodo[]>(storagedData);
    const [sort, setSort] = useState<SortType>("none")
    const [filter, setFilter] = useState<FilterType>('active');

    useEffect(() => {
        setStoragedData(todos);
    }, [todos])

    const filteredTodo = (todos: ITodo[], filter: FilterType, sort: SortType) => filters[filter](todos, sort);

    return (
        <style.STodosWrapper>
            <style.STodosText>Events</style.STodosText>
            <FilterTodoPanel filter={filter}  setSort={setSort} isSetFilter={setFilter} />
            <TodoList todos={filteredTodo(todos, filter, sort)} isSetTodos={setTodos} />
        </style.STodosWrapper>
    );
}

export default Todo;
