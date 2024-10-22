// import { View, Text ,TextInput,TouchableOpacity,SafeAreaView,Modal, Alert, Pressable,FlatList  } from 'react-native'
// import React, { useState } from 'react'



// const Home = () => {
//   const[input, setInput]=useState('')
//   const[todo , setTodo]=useState<string[]>(['helloword'])
//   const [modalVisible, setModalVisible] = useState(false);
// const [updateInput, setUpdateInput] = useState('')
// const [index, setIndex] = useState(0)
//   const addTodo =()=>{
//     console.log(input);
//     todo.push(input);
//     setTodo([...todo])
    
//   }

//   // delete todo
//   const deleteTodo =(index:number) =>{
//     console.log('todo delete',index)
//     todo.splice(index ,1),
//     setTodo([...todo])
    
//   }
//   const editTodo=(index:number)=>{
// console.log(updateInput ,index);
// todo.splice(index ,1, updateInput)
//  setTodo([...todo])
//    setModalVisible(false)
//     setUpdateInput('') // انپٹ کو ری سیٹ کریں
      

//   }



//   return (
//     <SafeAreaView>
//       <Text>Todo App</Text>
//       <TextInput
//       onChangeText={setInput}
//       value={input}
//       placeholder='entertodo'
//       />
//       <TouchableOpacity onPress={addTodo}>
//       <Text>Press Here</Text>
//       </TouchableOpacity> 
//       {todo.length > 0 ? 
//       <FlatList 
//       data= {todo}  renderItem={({item,index})=>{
//         return <View>
//           <text>{item}</text>
//          <TouchableOpacity onPress={()=>deleteTodo (index)}> 
//           <Text>Delete</Text>
//            </TouchableOpacity> 
//            <TouchableOpacity onPress={() => {
//               setIndex(index)
              
//               setModalVisible(true)
//             }}>
//           <Text>edit</Text>
//           </TouchableOpacity>
      
// </View>
//       }} keyExtractor={(item , index)=>index.toString()}
//       />: <Text>nofound</Text>}

      


//   <View>
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//             onRequestClose={() => {
//               Alert.alert('Modal has been closed.');
//               setModalVisible(!modalVisible);
//             }}>
//             <View>
//               <View>
//                 <Text>Update Todo!</Text>
//                 <TextInput
//                   onChangeText={setUpdateInput}
//                   value={updateInput}
//                 />
//                 <Pressable onPress={() => editTodo(index)}>
//                   <Text>Update Todo</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </SafeAreaView>
//     )
//   }
      
// export default Home

import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Modal, Alert, Pressable, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState<string[]>(['helloword'])
  const [modalVisible, setModalVisible] = useState(false);
  const [updateInput, setUpdateInput] = useState('')
  const [index, setIndex] = useState(0)

  const addTodo = () => {
    todo.push(input);
    setTodo([...todo])
  }

  const deleteTodo = (index: number) => {
    todo.splice(index, 1);
    setTodo([...todo])
  }

  const editTodo = (index: number) => {
    todo.splice(index, 1, updateInput);
    setTodo([...todo])
    setModalVisible(false);
    setUpdateInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder='Enter todo'
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>

      {todo.length > 0 ? 
        <FlatList 
          data={todo} 
          renderItem={({ item, index }) => (
            <View style={styles.todoContainer}>
              <Text style={styles.todoText}>{item}</Text>
              <View style={styles.todoButtons}>
                <TouchableOpacity style={styles.button} onPress={() => deleteTodo(index)}> 
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={() => { setIndex(index); setModalVisible(true); }}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )} 
          keyExtractor={(item, index) => index.toString()}
        /> 
        : <Text style={styles.noTodoText}>No todos found</Text>
      }

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.modalTitle}>Update Todo</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUpdateInput}
              value={updateInput}
            />
            <Pressable style={styles.modalButton} onPress={() => editTodo(index)}>
              <Text style={styles.modalButtonText}>Update Todo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    marginVertical: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 4
  },
  todoText: {
    fontSize: 16
  },
  todoButtons: {
    flexDirection: 'row'
  },
  noTodoText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  modalButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 4,
    marginTop: 10
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default Home;
















