import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as style from './todos.styles';
import TodoList from './TodoList/TodoList';
import FilterTodoPanel from './FilterTodoPanel/FilterTodoPanel';
import { FilterType, ITodo } from '../models/todo.model';
import DEFAULT_TODOS from '../data/DEFAULT_TODOS';

function Todo() {
    const [todos, setTodos] = useState<ITodo[]>(DEFAULT_TODOS);
    const [filter, setFilter] = useState<FilterType>('active');

    useLayoutEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function filteredTodo(todos: ITodo[], filter: FilterType) {
        if (filter === 'completed') {
            return todos.filter(todo => todo.completed);
        }
        if (filter === 'active') {
            return todos.filter(todo => !todo.completed);
        }
        throw new Error('Filter error');
    }

    return (
        <style.STodosWrapper>
            <style.STodosText>Events</style.STodosText>
            <FilterTodoPanel filter={filter} isSetFilter={setFilter} />
            <TodoList todos={filteredTodo(todos, filter)} isSetTodos={setTodos} />
        </style.STodosWrapper>
    );
}

export default Todo;
