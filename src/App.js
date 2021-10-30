import Container from "./components/container";
import { Background, CalculatorWrapper, GlobalStyle } from './components/style';

const  Calculator = () => {
  return(
    <Background>
      <GlobalStyle/>
      <CalculatorWrapper>
        <Container/>
      </CalculatorWrapper>
    </Background>
  )
}

export default Calculator;
