import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from'./components/Task' ;

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go */}
          <Task text={'Task 1'}/>
          <Task text={'task 2'} />
          <Task text={'task 3'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {  
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {  
   fontSize: 24,
   fontWeight: 'bold',
  },
  items: { 
 marginTop: 30,
  },
});
