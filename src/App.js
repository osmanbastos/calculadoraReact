import { Container, Content, Row, Column } from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleOperationSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      console.log( firstNumber + currentNumber);
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      console.log(sum);
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleOperationSum();
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')}/>
          <Button label={"2"} onClick={() => handleAddNumber('2')}/>
          <Button label={"3"} onClick={() => handleAddNumber('3')}/>
          <Button label={"-"}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')}/>
          <Button label={"5"} onClick={() => handleAddNumber('5')}/>
          <Button label={"6"} onClick={() => handleAddNumber('6')}/>
          <Button label={"+"} onClick={handleOperationSum}/>
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')}/>
          <Button label={"8"} onClick={() => handleAddNumber('8')}/>
          <Button label={"9"} onClick={() => handleAddNumber('9')}/>
          <Button label={"*"}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')}/>
          <Button label={"/"}/>
          <Button label={"C"}  onClick={handleClear}/>
          <Button label={"="} onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
