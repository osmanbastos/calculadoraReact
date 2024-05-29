import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#202020' : '#FFFFFF')};

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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
`

export const Content = styled.div`
    width: 30%;
    min-width: 20rem;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    padding: 0.2rem;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
`

export const Footer = styled.div`
    position: fixed;
    bottom: 0;

    span {
        vertical-align: middle;
    }

    color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFFFFF' : '#000000')};
    text-decoration: none;

    a {
        color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFFFFF' : '#000000')};
        text-decoration: none;
    
    }
`

export const ThemeButton = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#CACACA' : '#000000')};
    color: ${({ isDarkTheme }) => (isDarkTheme ? '#000000' : '#FFFFFF')};
    border: 1px solid ${({ isDarkTheme }) => (isDarkTheme ? '#000000' : '#FFFFFF')};
    border-radius: 5px;
    cursor: pointer;
`