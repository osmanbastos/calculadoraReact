import {ButtonContainer} from './styles'

const Button = ({label, onClick, isDarkTheme }) => {
    return (
      <ButtonContainer onClick={onClick} type="button" isDarkTheme={isDarkTheme}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;