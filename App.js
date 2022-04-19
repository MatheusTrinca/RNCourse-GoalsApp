import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addHandler = enteredText => {
    setGoals(prevState => [
      ...prevState,
      { id: Math.random().toString(), text: enteredText },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoal = id => {
    setGoals(prevState => prevState.filter(item => item.id !== id));
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Modal"
          color="#5e0acc"
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          isVisible={modalIsVisible}
          closeModal={closeModal}
          addHandler={addHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteHandler={deleteGoal} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
