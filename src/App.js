import './App.css'
import Container from "./components/container";
import { Background, CalculatorWrapper } from './components/style';

const  Calculator = () => {
  return(
    <Background>
      <CalculatorWrapper>
        <Container/>
      </CalculatorWrapper>
    </Background>
  )
}

export default Calculator;
