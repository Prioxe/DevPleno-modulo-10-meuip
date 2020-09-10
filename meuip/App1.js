
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image
} from 'react-native';
import logo from './assets/logo.png'


const App: () => React$Node = () => {
  
    constructor(props) {
        super(props);
        this.findMyIp = this.findMyIp.bind(this);
        this.state = {
          data: ""
        };
      }
  
  async findMyIp(){
    this.setState({
      data: 'descobrindo IP...'
    })
  }

  return (
    <>
    <View style={styles.container} >
      <View style={styles.body}>
        <Image source={logo} />
        <Text style={styles.ip}>{this.state.data}</Text>
        <Button title='Descobrir meu IP!' onPress={  }/>
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
