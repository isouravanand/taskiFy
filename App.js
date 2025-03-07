import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from'./components/Task' ;
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      {/*more and addnew button */}
      <View style={styles.option}>
  <TouchableOpacity style={styles.icon}>
    <Text style={styles.iconText}>☰</Text>
  </TouchableOpacity>
  <Text style={styles.more}>More</Text>

</View>

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
    backgroundColor: '#fbb03b'
    // backgroundColor: '#E8EAED',
  },
  option: {
    backgroundColor: '#E8EAED',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon :{
    padding: 10,
  },
  iconText: {
    fontSize: 20, // Adjust size as needed
  },
  more: {
    marginLeft: 8, // Add spacing between icon and text
    fontSize: 20,
    fontWeight: 'bold',
  },
  // addNewButton: {
  //   backgroundColor: '#55BCF6',
  //   paddingVertical: 6,
  //   paddingHorizontal: 12,
  //   borderRadius: 6,
  //   alignItems: 'flex-end',
  // },
  tasksWrapper: {  
    // backgroundColor: '#fbb03b',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: { 
   color: '#fff', 
   fontSize: 24,
   fontWeight: 'bold',
  },
  items: { 
 marginTop: 30,
  },
});
