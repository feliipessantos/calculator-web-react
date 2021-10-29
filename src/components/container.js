import React, { useState } from 'react'

import Bar from './bar';
import { BtnHidden, Buttons, Calc, KeyboardContainer, ResultBox } from './style'

export default function Container() {
    const [num, setNum] = useState("");
    const [decimal, setDecimal] = useState(false);
    const [firstNum, setfirstNum] = useState("");
    const [operator, setOperator] = useState();
    const [result, setResult] = useState("");

    function inputNum(e) {
      var input = e.target.value;
      if (num === "") {
        setNum(input);
      } else if (input === "."){
        setNum(num + input);
        setDecimal(true);
      } else {
        setNum(num + input);
      }
    }
  
    function clear() {
      setNum("");
      setfirstNum("")
      setOperator("")
      setDecimal(false)
      setResult("")
    }
  
    function signalHandler() {
      if (num > 0) {
        setNum(-num);
      } else {
        setNum(Math.abs(num));
      }
    }
    
    function percent() {
      setNum(num / 100);
    }

    function operatorHandler(e) {
      var operatorInput = e.target.value;
      setOperator(operatorInput);
      setfirstNum(num);
      setNum("");
      setDecimal(false)
    }
  
    function calculate() {
      if (operator === "-") {
        setResult(parseFloat(firstNum) - parseFloat(num));
      } else if (operator === "+") {
        setResult(parseFloat(firstNum) + parseFloat(num));
      } else if (operator === "/") {
        setResult(parseFloat(firstNum) / parseFloat(num));
      } else if (operator === "X") {
        setResult(parseFloat(firstNum) * parseFloat(num));
      }
    } 
    return (
    <>
    <Calc>{(num === "" || firstNum === "") ? "  " : firstNum + " " + operator + " " + num}</Calc>
    <ResultBox>{result === "" ? num : result}</ResultBox>
    <Bar/>
    <KeyboardContainer>
        <Buttons onClick={clear}>C</Buttons>
        <Buttons onClick={signalHandler}>+/-</Buttons>
        <Buttons onClick={percent} value="%">%</Buttons>
        <Buttons onClick={operatorHandler} value="/">/</Buttons>
        <Buttons onClick={inputNum} value={1}>1</Buttons>
        <Buttons onClick={inputNum} value={2}>2</Buttons>
        <Buttons onClick={inputNum} value={3}>3</Buttons>
        <Buttons onClick={operatorHandler} value="X">X</Buttons>
        <Buttons onClick={inputNum} value={4}>4</Buttons>
        <Buttons onClick={inputNum} value={5}>5</Buttons>
        <Buttons onClick={inputNum} value={6}>6</Buttons>
        <Buttons onClick={operatorHandler} value="-">-</Buttons>
        <Buttons onClick={inputNum} value={7}>7</Buttons>
        <Buttons onClick={inputNum} value={8}>8</Buttons>
        <Buttons onClick={inputNum} value={9}>9</Buttons>
        <Buttons onClick={operatorHandler} value="+">+</Buttons>
        <BtnHidden></BtnHidden>
        <Buttons onClick={inputNum} value={0}>0</Buttons>
        <Buttons onClick={inputNum} disabled={decimal} value={'.'}>.</Buttons>
        <Buttons onClick={calculate} onKeyPress>=</Buttons>
    </KeyboardContainer>
    </>
    )
}





