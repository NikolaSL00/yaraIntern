import { View, StyleSheet } from 'react-native';
import CustomText from '../CustomText';

const Dice = ({ value }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.value}>{value}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderColor: 'white',
    height: 70,
    width: 70,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Dice;
