import styled from 'styled-components';

export const STodoListItemWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: 40px;
    max-width: 1220px;
    margin: 0 20px;
    margin-bottom: 30px;
    border: 1px solid #efe6e6;
    border-radius: 10px;
    color: #efe6e6;
`;

export const STodoListItemCheck = styled.div`
    display: flex;
    gap: 15px;
`;

export const STodoListItemInputWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0 10px 10px;
    gap: 15px;
    font-size: 18px;

    input[type='checkbox'] {
        transform: scale(1.5);
        cursor: pointer;
    }

    p {
        position: relative;
        bottom: 2px;
        color: #efe6e6;
    }
`;

export const STodoListItemBtnWrap = styled.div`
    display: flex;
    gap: 10px;
`;

export const STodoListItemBtn = styled.button`
    --color: #bc70a4;
    color: #333;
    font-family: inherit;
    width: 80px;
    font-size: 18px;
    padding: 5px 12px;
    position: relative;
    overflow: hidden;
    border: 1px solid #cecece;
    transition: color 0.5s;
    z-index: 1;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        background: var(--color);
        height: 150px;
        width: 200px;
        border-radius: 50%;
    }
    &:hover {
        color: #fff;
        border: 1px solid #bc70a4;
        box-shadow: 0 0 0 5px rgba(227, 194, 234, 0.37);
    }

    &:before {
        top: 100%;
        left: 100%;
        transition: all 0.7s;
    }

    &:hover:before {
        top: -30px;
        left: -30px;
    }
`;

export const STodoListItemInput = styled.input`
    padding: 8px 0 8px 10px;
    border-radius: 5px;
    border-color: #b7b3b3;
    margin: 13px 0 13px 0;
    outline-color: #bc70a4;
    background-color: #f6f6f6;
    caret-color: #5f5f5f;
    border: 1px solid #cecece;
    font-size: 16px;
    caret-color: #bc70a4;
`;

export const STimeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const STime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        padding: 0;
        margin: 0;
        padding-bottom: 15px;
    }
`;

export const SSpekerContent = styled.div`
    font-size: 18px;
`;
