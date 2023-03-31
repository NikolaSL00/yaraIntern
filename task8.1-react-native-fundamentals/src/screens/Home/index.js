import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';

function HomeScreen() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Roll Dice');
  };

  return (
    <Container style={styles.additional}>
      <CustomText style={styles.title}>Home Screen</CustomText>
      <CustomButton onPress={handleOnPress}>
        <CustomText>Go to Roll Dice Feature</CustomText>
      </CustomButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  additional: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
