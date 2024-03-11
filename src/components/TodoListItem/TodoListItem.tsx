import { ITodoListItem } from '../../models/todo.model';
import * as style from './todoListItem.styles';
import { TodoNotes } from '../TodoNotes/TodoNotes';
import { useState } from 'react';
import { formatTime } from '../../utils/calculateDuration';

function TodoListItem({ id, title, isSetTodos, completed, speaker, startTime, endTime, notes }: ITodoListItem) {
    const [disappear, setDisappear] = useState(false); 
    const handleCheckboxChange = () => {
        setDisappear(true);
        setTimeout(() => {
            isSetTodos((prevTodos: ITodoListItem[]) => prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed, notes } : todo
                )
            );
        }, 400)
    };

    return (
        <style.STodoListItemWrapper $disappear={disappear}>
            <style.STodoListItemCheck>
                <style.STodoListItemInputWrap>
                    <input type='checkbox' checked={completed} onChange={handleCheckboxChange} />
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
                    <p>Длительность</p>
                    <span>{formatTime(startTime, endTime)}</span>
                </style.STime>
            </style.STimeWrapper>
            <TodoNotes notes={notes} isSetTodos={isSetTodos} id={id} />
        </style.STodoListItemWrapper>
    );
}

export default TodoListItem;
