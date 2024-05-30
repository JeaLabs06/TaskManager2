// screens/TaskDetailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firestore } from '../firebaseConfig';

export default function TaskDetailScreen({ route, navigation }) {
  const { task } = route.params;

  const handleDelete = () => {
    firestore.collection('tasks').doc(task.id).delete()
      .then(() => navigation.goBack())
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Button title="Delete Task" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
