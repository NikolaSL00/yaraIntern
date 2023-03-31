import { useContext } from 'react';
import { Context as DiceContext } from '../../context/DiceContext';

import { StyleSheet, View } from 'react-native';
import CustomText from '../CustomText';

const Statistics = () => {
  const { state } = useContext(DiceContext);

  return (
    <View style={styles.statistics}>
      <View style={styles.flexRow}>
        <CustomText style={styles.stat}>Best Score</CustomText>
        <CustomText style={styles.stat}>{state.highestResult}</CustomText>
      </View>

      <View style={styles.flexRow}>
        <CustomText style={styles.stat}>Number of Rolls</CustomText>
        <CustomText style={styles.stat}>{state.rolls}</CustomText>
      </View>

      <View style={styles.flexRow}>
        <CustomText style={[styles.stat, styles.currentScore]}>
          Current Score
        </CustomText>
        <CustomText style={[styles.stat, styles.currentScore]}>
          {state.currentScore}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statistics: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  stat: {
    marginBottom: 5,
    textAlign: 'center',
  },
  currentScore: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Statistics;
