import { useState } from "react";
import styled from "styled-components";
import { useCalculator } from "../hooks/useCalculator";

/* styling */
const Box = styled.section`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
`;

const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const NumInput = styled.input`
  width: 50%;
  padding: 1vh;
  font-size: calc(0.9vw + 0.9vh);
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vh;
  justify-content: center;
`;

const Key = styled.button`
  padding: 1vh 2vh;
  font-size: calc(0.9vw + 0.9vh);
  border: none;
  background: #0b6cff;
  color: #fff;
`;

const Output = styled.h3<{ negative: boolean }>`
  color: ${({ negative }) => (negative ? "red" : "black")};
`;

export default function Calculator() {
  const { result, add, subtract, multiply, divide, power, clear } = useCalculator();

  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <Box>
      <FieldSet>

        <label htmlFor="num1">Number&nbsp;1</label>
        <NumInput id="num1" value={a} onChange={(e) => setA(e.target.value)}/>

        <label htmlFor="num2">Number&nbsp;2</label>
        <NumInput id="num2" value={b} onChange={(e) => setB(e.target.value)}/>

      </FieldSet>

      <ButtonRow>
        <Key onClick={() => add(a, b)}>+</Key>
        <Key onClick={() => subtract(a, b)}>−</Key>
        <Key onClick={() => multiply(a, b)}>*</Key>
        <Key onClick={() => divide(a, b)}>/</Key>
        <Key onClick={() => power(a, b)}>x^y</Key>

        <Key onClick={() => {clear(); setA(""); setB("");}}> Clear </Key>
      </ButtonRow>

      <Output negative={Number(result) < 0}>{result}</Output>
    </Box>
  );
}
