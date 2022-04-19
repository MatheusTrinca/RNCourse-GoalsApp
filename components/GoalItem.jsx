import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ item, deleteHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={() => deleteHandler(item.id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    fontSize: 16,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    color: '#ddd',
  },
});
