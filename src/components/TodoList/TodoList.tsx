import { TodoListProps } from '../../models/todo.model';
import TodoListItem from '../TodoListItem/TodoListItem';
import * as style from './todoList.styles';

function TodoList({ todos, isSetTodos }: TodoListProps) {
    return (
        <style.STodoListWrapper>
            {todos.map(todo => (
                <TodoListItem
                    {...todo}
                    key={todo.id}
                    todos={todos}
                    isSetTodos={isSetTodos}
                />
            ))}
        </style.STodoListWrapper>
    );
}

export default TodoList;
