
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,

} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
    <View style={styles.container} >
      <View style={styles.body}>
        <Text style={styles.ip}>IP</Text>
        <Button title='Descobrir meu IP!' />
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>Feito com sono</Text>

      </View>
    </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  body: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip:{
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 25 
  },
  made: {
    color: 'white',
    textAlign: 'center'
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10
  } 
});

export default App;
