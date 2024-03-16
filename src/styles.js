import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        padding: 0 0 10px 0;
    }
    h3 {
        padding-top: 10px;
        text-align: center;
    }
`

export const Content = styled.div`
    width: 30%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
`