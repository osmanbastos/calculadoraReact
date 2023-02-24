import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display:flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #000000;
        color: #FFFFFF;
        border: 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        padding: 0 10px;
        font-size: 30px;
        font-family: 'Roboto';
        flex: 1;
    }
`