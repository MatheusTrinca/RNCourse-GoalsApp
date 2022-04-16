import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addHandler = () => {
    setGoals(prevState => [...prevState, enteredGoal]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={goalHandler}
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map(goal => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    width: '70%',
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    fontSize: 16,
    backgroundColor: '#5e0acc',
    padding: 8,
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
  },
});
