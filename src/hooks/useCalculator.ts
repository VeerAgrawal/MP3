import { useState } from "react";

/* keep result in state; return helpers */
export function useCalculator() {
  const [result, setResult] = useState<number | string>("");

  function read(aStr: string, bStr: string) {
    return [Number(aStr), Number(bStr)];
  }

  return {
    result,

    add: (a: string, b: string) => {
      const [x, y] = read(a, b);
      setResult(x + y);
    },

    subtract: (a: string, b: string) => {
      const [x, y] = read(a, b);
      setResult(x - y);
    },

    multiply: (a: string, b: string) => {
      const [x, y] = read(a, b);
      setResult(x * y);
    },

    divide: (a: string, b: string) => {
      const [x, y] = read(a, b);
      setResult(x / y);
    },

    power: (a: string, b: string) => {
      const [base, exp] = read(a, b);
      let res = 1;
      const times = Math.abs(exp);
      for (let i = 0; i < times; i++) res *= base;
      setResult(exp < 0 ? 1 / res : res);
    },

    clear: () => setResult(""),
  };
}
