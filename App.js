import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from'./components/Task' ;
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
const [task, setTask]=useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = ()=> {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

  return (
    <View style={styles.container}>
      {/*more and addnew button */}
      <View style={styles.option}>
  <TouchableOpacity style={styles.icon}>
    <Text style={styles.iconText}>☰</Text>
  </TouchableOpacity>
  <Text style={styles.more}>More</Text>
{/* 
  <TouchableOpacity style={styles.addNewButton}>
    <Text style={styles.addNewText}>+ Add New</Text>
  </TouchableOpacity> */}
</View>

      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go */}
          {
            taskItems.map((item) => {
            return  <Task text={item} />
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'task 2'} />
          <Task text={'task 3'} /> */}
        </View>
      </View>
      {/*write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "pading" : "height"}
      style={styles.writetextWrapper}
      >
        <TextInput style={styles.input} placeholder={'write a task'} value ={task} onChangeText={text =>  setTask(text)}/>
<TouchableOpacity onPress={() => handleAddTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
      </KeyboardAvoidingView>
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
  writetextWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
   
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
