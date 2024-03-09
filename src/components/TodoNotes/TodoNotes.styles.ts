import styled from 'styled-components';

export const SNotesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
        margin: 10px 0;
    }
`;

export const SNoteContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    p {
        padding: 20px 0;
    }
`;
export const STextArea = styled.textarea`
    width: 180px;
    height: 100px;
    font-size: 14px;
`;
export const STextAreaWrap = styled.div`
    padding-right: 20px;
`;
export const STextBtn = styled.button`
    padding: 5px 10px;
    margin-bottom: 15px;
    border: none;
    background-color: #3b82f6;
    border-radius: 5px;
    transition: all 0.4s;
    color: #fff;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export const SSaveBtn = styled(STextBtn)`
    background-color: #3b82f6; /* Синий цвет для Save */
`;

export const SClearBtn = styled(STextBtn)`
    background-color: #dc2626;
`;

export const SPen = styled.div`
    position: absolute;
    left: 70px;
    top: 20px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        opacity: 0.6;
    }
`;

export const SNote = styled.p`
    max-width: 200px;
    word-wrap: break-word;
    padding: 0 15px 15px 0;
`;

export const SBtnWrap = styled.p`
    display: flex;
    justify-content: space-between;
`;
