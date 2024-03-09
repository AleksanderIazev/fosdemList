import { useState } from 'react';
import { ITodoListItem } from '../../models/todo.model';
import * as style from './todoListItem.styles';
import { TodoNotes } from '../TodoNotes/TodoNotes';

function TodoListItem({ id, title, isSetTodos, completed, speaker, startTime, endTime, notes }: ITodoListItem) {
    const [checked, setChecked] = useState(completed);

    const handleCheckboxChange = () => {
        isSetTodos((prevTodos: ITodoListItem[]) =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed, notes: todo.completed ? notes : '' } : todo
            )
        );
    };

    return (
        <style.STodoListItemWrapper>
            <style.STodoListItemCheck>
                <style.STodoListItemInputWrap>
                    <input type='checkbox' checked={checked} onChange={handleCheckboxChange} />
                    <a style={{ color: 'white' }} href={title} target='_blank' rel='noopener noreferrer'>
                        {title}
                    </a>
                </style.STodoListItemInputWrap>
            </style.STodoListItemCheck>
            <style.SSpekerContent>
                <span>{speaker}</span>
            </style.SSpekerContent>
            <style.STimeWrapper>
                <style.STime>
                    <p>Начало</p>
                    <span>{startTime}</span>
                </style.STime>
                <style.STime>
                    <p>Конец</p>
                    <span>{endTime}</span>
                </style.STime>
            </style.STimeWrapper>
            <TodoNotes notes={notes} />
        </style.STodoListItemWrapper>
    );
}

export default TodoListItem;
