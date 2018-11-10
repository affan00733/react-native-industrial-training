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
import { withNavigation } from 'react-navigation';


// import styles from '../../styles' 
import {app} from '../../firebase/firrebase'

const Logout = (props) => {
  const { navigate } = props.navigation;
  app.auth().signOut().then(function() {
            // Sign-out successful.
            // alert('succcessfull Logout')
        console.log('succcessfull Logout')
          }).catch(function(error) {
            // An error happened.
            console.log(error.toString())
          });
    navigate('StackNav1')
    // alert('success........logout')
  return false
  
}



export default Logout;
