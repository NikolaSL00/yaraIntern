import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

const CustomText = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default CustomText;
