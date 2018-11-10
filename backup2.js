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
  FlatList,
  AlertAndroid
} from 'react-native';

import * as firebase from 'firebase'
import PropTypes from 'prop-types'
const config = {
  apiKey: "AIzaSyDCOC_WwymaiGMxLNIN5SBNJs5KMrUPxmY",
  authDomain: "react-native-database-develer.firebaseapp.com",
  databaseURL: "https://react-native-database-develer.firebaseio.com",
  projectId: "react-native-database-develer",
  storageBucket: "react-native-database-develer.appspot.com",
  messagingSenderId: "722931507123",
}

let app =  firebase.initializeApp(config)
const db = app.database()
let b = ''
// const addItem =  (item,subject) => {
//   db.ref('/items/'+subject).push().set({
//       name: item
//   });
//   console.log(subject)

// }
let itemsRef = db.ref( '/items' );


class ItemComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.itemtext}>{item.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}


export default class App extends Component {
  constructor(){
    super()
    
    this.state={
      name : '',
      error : false,
      items : [],
      subject : '',

    }

    

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){

   itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({items});
   });
  }




  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  handleChange1(e) {
    this.setState({
      subject: e.nativeEvent.text
    });
    b = this.state.subject

  }
  
  handleSubmit() {
    // addItem(this.state.name,this.state.subject);
   
    //  b = this.state.subject
     db.ref('/items/'+this.state.subject).push().set({
      name: this.state.name
  });

  // itemsRef = db.ref( '/items/chem' );


  alert(
    'Item saved successfully'
   );
    console.log(b)
  }
  renderItem = ({item,index}) => {

    return(
      <Text>{item.name}</Text>
    )

  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput 
      placeholder = 'enter'
      onChange={this.handleChange}
      // onChangeText = {() => this.setState({})}
      />
       <TextInput 
      placeholder = 'subject'
      onChange={this.handleChange1}
      // onChangeText = {() => this.setState({})}
      />

      <Button 
      title ='add'
      onPress={this.handleSubmit}
      />
        <View>

          {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }


          </View>
          <View>
            <FlatList 
            data = {this.state.items}
            renderItem = {(item) => this.renderItem(item)  }
            keyExtractor = { (item,index) => item.name }
            extraData = {this.state.items}
            />
            </View>
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
