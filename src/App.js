import { Container, Content, Row} from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [mostre, setMostre] = useState('0')

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

  return (
    <Container>
      <h2>CALCULADORA BÁSICA</h2>
      <Content>
        <Input value={mostre}/>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')}/>
          <Button label={"8"} onClick={() => handleAddNumber('8')}/>
          <Button label={"9"} onClick={() => handleAddNumber('9')}/>
          <Button label={"C"} onClick={handleClear}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')}/>
          <Button label={"5"} onClick={() => handleAddNumber('5')}/>
          <Button label={"6"} onClick={() => handleAddNumber('6')}/>
          <Button label={"+"} onClick={handleOperationSum}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')}/>
          <Button label={"2"} onClick={() => handleAddNumber('2')}/>
          <Button label={"3"} onClick={() => handleAddNumber('3')}/>
          <Button label={"-"} onClick={handleOperationMinus}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')}/>
          <Button label={"*"} onClick={handleOperationMultiply}/>
          <Button label={"/"} onClick={handleOperationDivide}/>
          <Button label={"="} onClick={handleEquals}/>
        </Row>
      </Content>
      <h3>Desenvolvida por Osman Bastos em react.js</h3>
    </Container>
  );
}

export default App;