import { TodoListProps } from '../../models/todo.model';
import TodoListItem from '../TodoListItem/TodoListItem';
import * as style from './todoList.styles';

function TodoList({ todos, isSetTodos }: TodoListProps) {
    return (
        <style.STodoListWrapper>
            {todos.map(el => (
                <TodoListItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    completed={el.completed}
                    todos={todos}
                    isSetTodos={isSetTodos}
                    speaker={el.speaker}
                    startTime={el.startTime}
                    endTime={el.endTime}
                    notes={el.notes}
                />
            ))}
        </style.STodoListWrapper>
    );
}

export default TodoList;
