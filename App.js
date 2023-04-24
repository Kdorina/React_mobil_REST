import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  const[emps, setEmps] = useState([]);

  function employees(){
    let host = 'http://localhost:8000/api/';
    let endPoint = 'employees';
    let url = host +endPoint;
    
    fetch(url).then(response => response.json())
    .then(result=> {
      // console.log(result);
      setEmps(result);
    });
  }

  useEffect( ()=> {
    employees();
    
  }, []); 

  return (
    <View style={styles.container}>
      <Text>Zoldhum</Text>
      <FlatList 
      data={emps} 
      renderItem={ ({item}) => (
         <Text>{item.name}</Text>
      )}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BAD9B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
