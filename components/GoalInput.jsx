import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

const GoalInput = ({ addHandler, isVisible, closeModal }) => {
  const [enteredText, setEnteredText] = useState('');

  const goalHandler = text => {
    setEnteredText(text);
  };

  const onAddHandler = () => {
    if (enteredText.length > 4) {
      addHandler(enteredText);
      setEnteredText('');
    }
  };

  console.log('Goal Input');

  return (
    <Modal visible={isVisible} animationType="none">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={goalHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
