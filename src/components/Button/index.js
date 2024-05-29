import {ButtonContainer} from './styles'

const Button = ({label, onClick, isDarkTheme, isEqual }) => {
    return (
      <ButtonContainer onClick={onClick} type="button" isDarkTheme={isDarkTheme} isEqual={isEqual}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;