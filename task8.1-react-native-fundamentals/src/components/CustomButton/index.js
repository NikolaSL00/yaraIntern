import { TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ style, children, ...props }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} {...props} color="#5e5ce6">
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#5e5ce6',
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 3,
  },
});

export default CustomButton;
