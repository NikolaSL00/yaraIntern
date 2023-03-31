import { StyleSheet, ScrollView } from 'react-native';
import { useContext, useState } from 'react';
import useRollDices from '../../hooks/useRollDices';

import Container from '../../components/Container';
import Dice from '../../components/Dice';
import CustomModal from '../../components/Modal';
import Statistics from '../../components/Statistics';
import Controls from '../../components/Controls';

import { Context as DiceContext } from '../../context/DiceContext';

const RollingDiceScreen = () => {
  const { state, updateHighestResult, updateNumRolls, updateCurrentScore } =
    useContext(DiceContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [dices, rollDices] = useRollDices(new Array(state.numDices).fill('#'));

  const handleOnRollPress = () => {
    const currentScore = rollDices();
    updateCurrentScore(currentScore);
    updateNumRolls();

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
