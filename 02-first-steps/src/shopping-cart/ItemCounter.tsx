import { useState } from "react";


import './ItemCounter.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {
  
  const [count, setCount]  = useState(quantity);

  const handdleAdd = (count: number) => {
    setCount(count + 1);
  };

  const handdleSubtrack = (count: number) => {
    if (count === 1) return;

    setCount(count - 1);
  };

  const handleClick = () => {
    console.log(`Click en ${count + 1}`)
    console.log(`Click en ${count}`)
  };

  return (
    <section className="item-row">
      <span className="item-text" style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
      <button onClick={() => { handdleAdd(count); handleClick(); }}>
        +1
      </button>
      <span>{count}</span>
      <button onClick={() => { handdleSubtrack(count); handleClick(); }}>
        -1
      </button>
    </section>  
  );
}

