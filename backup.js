/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDCOC_WwymaiGMxLNIN5SBNJs5KMrUPxmY",
  authDomain: "react-native-database-develer.firebaseapp.com",
  databaseURL: "https://react-native-database-develer.firebaseio.com",
  projectId: "react-native-database-develer",
  storageBucket: "react-native-database-develer.appspot.com",
  messagingSenderId: "722931507123"
}

firebase.initializeApp(config)


export default class App extends Component {
  constructor(){
    super()
    
    this.state={

      data : '',
      subject : '',
      options : []
    }
    this.click=this.click.bind(this)
    this.renderItem=this.renderItem.bind(this)

  }
  renderItem = ({item,index}) => {

    return(
      <Text>{item.name}</Text>
    )

  }

  click=async(data)=> {
    let key = firebase.database().ref('/Subjects/'+this.state.subject).push().key
console.log(key)
 await  firebase.database().ref('/Subjects/'+this.state.subject).child(key).set({name : data})

//  await  firebase.database().ref('/Subjects/'+this.state.subject).once('value',(data) => {
//      console.log(data.toJSON())
//      this.setState({options : data})
//    })

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        placeholder = "enter"
        onChangeText= {(data)=>this.setState({data})}
        />
        <TextInput 
        placeholder = "subject"
        onChangeText= {(subject)=>this.setState({subject})}
        />
         <TextInput 
        placeholder = "option"
        onChangeText= {(options)=>this.setState({options})}
        />
        <Button 
        title="clcik"
        onPress={()=>this.click(this.state.data)}
        /> 
        
        <FlatList
      data = {this.state.options}
      renderItem = {(item) => this.renderItem(item)  }
      keyExtractor = { (item,index) => item.name }
      extraData = {this.state.options}
      />
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
