import { StyleSheet, TouchableOpacity, View } from 'react-native';

import CustomButton from '../CustomButton';
import { Feather } from '@expo/vector-icons';
import CustomText from '../CustomText';

const Controls = ({ onSettingPress, onRollPress }) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={onSettingPress}>
        <Feather name="settings" style={styles.settingIcon} />
      </TouchableOpacity>

      <CustomButton onPress={onRollPress}>
        <CustomText>Roll</CustomText>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  settingIcon: {
    fontSize: 30,
    color: 'white',
    marginBottom: 30,
  },
});

export default Controls;
