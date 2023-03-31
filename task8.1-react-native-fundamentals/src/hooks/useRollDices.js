import { useContext, useState } from 'react';

import { Context as DiceContext } from '../context/DiceContext';

const useRollDices = (initial) => {
  const {
    state: { numDices, sides },
  } = useContext(DiceContext);

  const [dices, setDices] = useState(initial);

  const rollDices = () => {
    const diceResults = [];

    for (let i = 0; i < numDices; i++) {
      diceResults.push(Math.floor(Math.random() * sides) + 1);
    }

    setDices(() => diceResults);

    return diceResults.reduce((acc, n) => acc + n, 0);
  };

  return [dices, rollDices];
};

export default useRollDices;
