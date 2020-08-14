
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,

} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
    <View >
      <Text style={styles.tamnho}>Chama Edgar</Text>
    </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  tamnho:{
    fontSize:100
  }
});

export default App;
