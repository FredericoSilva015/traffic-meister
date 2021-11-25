import { useState } from 'react';

export const useExample = (text: string) => {
  const [test, setTest] = useState<String>(text);

  const changeExample = (value: String): void => setTest(value);

  const outputExample = (): String => test;

  return { changeExample, outputExample };
};
