import {InputContainer} from './styles'

const Input = ({value , isDarkTheme}) => {
    return (
      <InputContainer>
      <input disabled value={value} isDarkTheme={isDarkTheme}/>
      </InputContainer>
    );
  }
  
  export default Input;