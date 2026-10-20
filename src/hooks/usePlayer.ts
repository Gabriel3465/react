import { useState } from "react";

export const DEFAULT_COUNTER = 20;

export const usePlayer = (initialCounter: number = DEFAULT_COUNTER) => {
  const [counter, setCounter] = useState<number>(initialCounter);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  };

  const resetCounter = () => {
    setCounter(DEFAULT_COUNTER);
  };

  return {
    counter,
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
};

export default usePlayer;
