import { useState } from 'react';
import { HiPencil } from 'react-icons/hi2';
import * as style from './TodoNotes.styles';
import { ITodo } from '../../models/todo.model';

export const TodoNotes = ({ notes, id, isSetTodos }: { notes: string; isSetTodos: any; id: string }) => {
    const [isOpenNote, setIsOpenNote] = useState(false);
    const [write, setWrite] = useState(notes);

    const toggleNote = () => {
        setIsOpenNote(prev => !prev);
    };

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWrite(e.target.value);
    };

    const handleSaveNote = () => {
        isSetTodos((prevTodos: ITodo[]) =>
            prevTodos.map(todo => {
                return todo.id === id ? { ...todo, notes: write } : todo;
            })
        );
        setIsOpenNote(false);
    };

    const handleClear = () => {
        setWrite('');
        isSetTodos((prevTodos: ITodo[]) =>
            prevTodos.map(todo => {
                return todo.id === id ? { ...todo, notes: '' } : todo;
            })
        );
        setIsOpenNote(false);
    };

    return (
        <style.SNotesWrapper>
            <style.SNoteContainer>
                <p>Заметка</p>
                <style.SPen>
                    <HiPencil onClick={toggleNote} />
                </style.SPen>
            </style.SNoteContainer>

            {isOpenNote ? (
                <style.STextAreaWrap>
                    <style.STextArea value={write} onChange={handleNoteChange} />
                    <style.SBtnWrap>
                        <style.SSaveBtn onClick={handleSaveNote}>Save</style.SSaveBtn>
                        <style.SClearBtn onClick={handleClear}>Clear</style.SClearBtn>
                    </style.SBtnWrap>
                </style.STextAreaWrap>
            ) : (
                <style.SNote>{notes.length ? notes : ''}</style.SNote>
            )}
        </style.SNotesWrapper>
    );
};
