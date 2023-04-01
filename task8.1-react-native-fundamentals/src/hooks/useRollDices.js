import { useContext, useState } from 'react';

import { Context as DiceContext } from '../context/DiceContext';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const FILLER = <MaterialCommunityIcons name="clover" size={30} color="green" />;

const useRollDices = () => {
  const {
    state: { numDices, sides },
  } = useContext(DiceContext);

  const [dices, setDices] = useState(new Array(numDices).fill(FILLER));

  const rollDice = () => {
    const diceResults = [];

    for (let i = 0; i < numDices; i++) {
      diceResults.push(Math.floor(Math.random() * sides) + 1);
    }
    setDices(() => diceResults);

    return diceResults.reduce((acc, n) => acc + n, 0);
  };
  const resetDice = () => {
    setDices(() => new Array(numDices).fill(FILLER));
    return 0;
  };

  return [dices, rollDice, resetDice];
};

export default useRollDices;
