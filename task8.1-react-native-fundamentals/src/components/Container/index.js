import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ style, children, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default Container;
