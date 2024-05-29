import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 1.2rem;
    margin: 0.1rem;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ isDarkTheme }) => (isDarkTheme ? 'none' : '#777777')};
    background-color: ${({ isEqual, isDarkTheme }) => (isEqual ? '#008000' : (isDarkTheme ? '#333333' : '#FFFFFF'))};
    color: ${({ isEqual, isDarkTheme }) => (isEqual ? '#FFFFFF' : (isDarkTheme ? '#FFFFFF' : '#000000'))};
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    &:hover {
        opacity: 0.6;
    }
`