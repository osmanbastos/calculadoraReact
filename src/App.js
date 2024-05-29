import { Container, Card, Content, Row, Footer, ThemeButton} from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react';
import Icon from '@mui/material/Icon';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [mostre, setMostre] = useState('0')
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    if(currentNumber === '0' && operation ==='' && firstNumber === '0'){
      setMostre(num)
    }else if(operation !=='' && firstNumber !== '0'){
      const mostrar = (`${firstNumber} ${operation} ${num}`)
      setMostre(mostrar)
      console.log(mostrar)
    }else {
      setMostre(prev => `${prev}${num}`)
    }
  };

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    setMostre('0')
  };

  const handleOperationSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      setMostre(`${currentNumber} + ${operation}`)
      console.log( firstNumber + currentNumber);
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      setMostre(sum)
      console.log(sum);
    }
  }

  const handleOperationMinus = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      setMostre(`${currentNumber} - ${operation}`)
      console.log( firstNumber - currentNumber);
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
      setMostre(minus)
      console.log(minus);
    }
  }

  const handleOperationMultiply = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
      setMostre(`${currentNumber} * ${operation}`)
      console.log( firstNumber * currentNumber);
    }else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi))
      setOperation('')
      setMostre(multi)
      console.log(multi);
    }
  }

  const handleOperationDivide = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      setMostre(`${currentNumber} / ${operation}`)
      console.log( firstNumber / currentNumber);
    }else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide))
      setOperation('')
      setMostre(divide)
      console.log(divide);
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleOperationSum();
          break;
        case '-':
          handleOperationMinus();
          break;
        case '*':
          handleOperationMultiply();
          break;
        case '/':
          handleOperationDivide();
          break;
        default:
          handleAddNumber("Err");
          break;
      }
    }
  }

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <Container isDarkTheme={isDarkTheme}>
      <ThemeButton onClick={toggleTheme}>
        {isDarkTheme ? "Light Mode" : "Dark Mode"}
      </ThemeButton>
      <Card>
        <h1>CALCULADORA</h1>
        <Content>
          <Input value={mostre} isDarkTheme={isDarkTheme}/>
          <Row>
            <Button label={"7"} onClick={() => handleAddNumber('7')} isDarkTheme={isDarkTheme}/>
            <Button label={"8"} onClick={() => handleAddNumber('8')} isDarkTheme={isDarkTheme}/>
            <Button label={"9"} onClick={() => handleAddNumber('9')} isDarkTheme={isDarkTheme}/>
            <Button label={"C"} onClick={handleClear} isDarkTheme={isDarkTheme}/>
          </Row>
          <Row>
            <Button label={"4"} onClick={() => handleAddNumber('4')} isDarkTheme={isDarkTheme}/>
            <Button label={"5"} onClick={() => handleAddNumber('5')} isDarkTheme={isDarkTheme}/>
            <Button label={"6"} onClick={() => handleAddNumber('6')} isDarkTheme={isDarkTheme}/>
            <Button label={"+"} onClick={handleOperationSum} isDarkTheme={isDarkTheme}/>
          </Row>
          <Row>
            <Button label={"1"} onClick={() => handleAddNumber('1')} isDarkTheme={isDarkTheme}/>
            <Button label={"2"} onClick={() => handleAddNumber('2')} isDarkTheme={isDarkTheme}/>
            <Button label={"3"} onClick={() => handleAddNumber('3')} isDarkTheme={isDarkTheme}/>
            <Button label={"-"} onClick={handleOperationMinus} isDarkTheme={isDarkTheme}/>
          </Row>
          <Row>
            <Button label={"0"} onClick={() => handleAddNumber('0')} isDarkTheme={isDarkTheme}/>
            <Button label={"*"} onClick={handleOperationMultiply} isDarkTheme={isDarkTheme}/>
            <Button label={"/"} onClick={handleOperationDivide} isDarkTheme={isDarkTheme}/>
            <Button label={"="} onClick={handleEquals} isDarkTheme={isDarkTheme}/>
          </Row>
        </Content>
      </Card>
      <Footer isDarkTheme={isDarkTheme}>
      <span>Desenvolvido com <Icon sx={{ color: "red" }}>favorite</Icon> por <a class="footer-link" href="https://www.linkedin.com/in/osmanbastos" target="_blank" title="LinkedIn" rel="noreferrer"><strong>Osman Bastos.</strong></a></span>
      </Footer>
    </Container>
  );
}

export default App;