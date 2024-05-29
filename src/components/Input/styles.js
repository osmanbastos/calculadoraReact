import { styled, createGlobalStyle} from 'styled-components';
import Calculator from '../../fonts/Calculator.ttf'; // Ajuste o caminho conforme necessário

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calculator';
    src: local('Calculator'), url(${Calculator}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display:flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #777777;
    filter: opacity(1.5);
    
    border-radius: 10px;

    input {
        width: 100%;
        height: 75px;
        color: #FFFFFF;
        border: 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        padding: 0 10px;
        font-size: 40px;
        font-family: 'Calculator';
        flex: 1;
    }
`