import styled from 'styled-components';

export const SFilterComponentWrapper = styled.div`
    display: flex;
    min-width: 1180px;
    justify-content: space-around;
    gap: 10px;
    margin: 25px 0;
    font-family: inherit;
`;

export const SFilterBtn = styled.button`
    font-size: 18px;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #b7b3b3;
    transition: all 0.3s;
    font-family: inherit;
    color: #333;

    &:hover {
        color: #fff;
        background-color: #bc70a4;
        border: 1px solid #bc70a4;
        box-shadow: 0 0 0 5px rgba(227, 194, 234, 0.37);
    }

    &.active {
        background-color: #bc70a4;
        border: 1px solid #bc70a4;
        color: white;
        transform: translateY(-4px);
    }
`;
