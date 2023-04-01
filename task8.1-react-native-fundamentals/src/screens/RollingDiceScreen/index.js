import { StyleSheet, ScrollView } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import useRollDices from '../../hooks/useRollDices';

import Container from '../../components/Container';
import Dice from '../../components/Dice';
import CustomModal from '../../components/Modal';
import Statistics from '../../components/Statistics';
import Controls from '../../components/Controls';

import { Context as DiceContext } from '../../context/DiceContext';

const RollingDiceScreen = () => {
  const {
    state,
    updateHighestResult,
    incrementRolls,
    updateCurrentScore,
    resetResults,
  } = useContext(DiceContext);

  const [dices, rollDice, resetDice] = useRollDices();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    resetDice();
    resetResults();
  }, [state.numDices, state.sides]);

  const handleOnRollPress = () => {
    const currentScore = rollDice();
    updateCurrentScore(currentScore);
    incrementRolls();

    if (state.highestResult < currentScore) {
      updateHighestResult(currentScore);
    }
  };

  const openModal = () => {
    setModalVisible(() => true);
  };
  const closeModal = () => {
    setModalVisible(() => false);
  };

  const renderDices = dices.map((dice, index) => {
    return <Dice key={index} value={dice} />;
  });

  return (
    <Container style={styles.container}>
      <CustomModal isVisible={modalVisible} onClose={closeModal} />
      <Statistics />

      <ScrollView contentContainerStyle={styles.dices}>
        {renderDices}
      </ScrollView>

      <Controls onSettingPress={openModal} onRollPress={handleOnRollPress} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  dices: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
    flex: 1,
  },
});

export default RollingDiceScreen;
