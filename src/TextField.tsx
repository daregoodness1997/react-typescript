import React, { useRef, useState } from 'react';

interface Person {
  firstName: string;
  lastname: string;
}

interface Props {
  text: string;
  ok?: boolean;
  id?: number;
  fn?: (bob: string) => number;
  //   obj: {
  //     field1: string;
  //   };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ person, ok, text, id, handleChange }) => {
  // useState
  const [count, setCount] = useState<number | null | undefined | string>(5);
  const [message, setMessage] = useState<{ text: string }>({ text: 'Hello' });
  const [messages, setMessages] = useState<TextNode>({ text: 'Hello' });
  const [scores, setScores] = useState<number[]>([1, 2, 3, 4]);
  const [obj, setObj] = useState<TextNode>({ text: 'Ade' });

  //   useRef
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
      <span ref={spanRef}>{count}</span>
      <h1>{message.text}</h1>
      {scores.map(score => (
        <h1>{score}</h1>
      ))}
    </div>
  );
};

export default TextField;
