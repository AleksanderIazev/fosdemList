import { useState } from 'react';
import { HiPencil } from 'react-icons/hi2';
import * as style from './TodoNotes.styles';

export const TodoNotes = ({ notes }: { notes: string }) => {
    const [isOpenNote, setIsOpenNote] = useState(false);
    const [write, setWrite] = useState(notes);
    const [note, setNote] = useState(notes);

    const toggleNote = () => {
        setIsOpenNote(prev => !prev);
    };

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWrite(e.target.value);
    };

    const handleSaveNote = () => {
        setNote(write);
        setIsOpenNote(false);
    };

    const handleClear = () => {
        setWrite('');
        setNote('');
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
                <style.SNote>{note.length ? note : ''}</style.SNote>
            )}
        </style.SNotesWrapper>
    );
};
