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
  TextInput,Button,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  ImageBackground 
} from 'react-native';


import styles from '../styles' 
export default class Home extends Component {
  
 constructor(){
     super()
     this.click=this.click.bind(this)
 }


  click=()=>{
    this.props.navigation.navigate('Login')
  }

    render() {
      return (
       
<ImageBackground source={require('../../images/bg.jpg') }  style={styles.container}>
     <View style={styles.inner}>    
          <TouchableOpacity   onPress = {() => this.click()}
           style={styles.signin}
           >
             <Text style={styles.text}>Sign IN</Text>
             </TouchableOpacity>
           
            </View>
         </ ImageBackground>

           
      );
    }
  }
  
  
  
  
  