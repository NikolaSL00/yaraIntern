import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useContext } from 'react';
import { Context as DiceContext } from '../../context/DiceContext';

import { AntDesign } from '@expo/vector-icons';

const CustomModal = ({ isVisible, onClose }) => {
  const {
    state: { numDices, sides },
    changeDicesNumber,
    changeDicesSides,
  } = useContext(DiceContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Change the number of dice</Text>
          <View style={styles.controllGroup}>
            <Text>{numDices}</Text>
            <Pressable
              style={[styles.button, styles.buttonApply]}
              onPress={() => changeDicesNumber(1)}
            >
              <Text style={styles.textStyle}>
                <AntDesign name="plus" size={24} color="white" />
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeDicesNumber(-1)}
            >
              <Text style={styles.textStyle}>
                <AntDesign name="minus" size={24} color="white" />
              </Text>
            </Pressable>
          </View>

          <Text style={styles.modalText}>Change the sides of each die</Text>
          <View style={styles.controllGroup}>
            <Text>{sides}</Text>
            <Pressable
              style={[styles.button, styles.buttonApply]}
              onPress={() => changeDicesSides(1)}
            >
              <Text style={styles.textStyle}>
                <AntDesign name="plus" size={24} color="white" />
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeDicesSides(-1)}
            >
              <Text style={styles.textStyle}>
                <AntDesign name="minus" size={24} color="white" />
              </Text>
            </Pressable>
          </View>

          <Pressable
            style={[
              styles.button,
              styles.buttonClose,
              { width: 200, marginTop: 20 },
            ]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  controllGroup: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 50,
    minHeight: 50,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonApply: {
    backgroundColor: '#5e5ce6',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CustomModal;
