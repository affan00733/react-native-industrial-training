
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  AlertAndroid,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types'
import styles from '../components/styles'
export default class Home extends Component {
    constructor(){
      super()
      this.state = {
    
      }
    }
    
    componentDidMount(){
    
    }
    
    render(){
      return(
        <ImageBackground source={require('../../src/images/bg.jpg') }  style={styles.container}>

        <View style={styles.inner}>
        <ScrollView>
        {/* <Button 
        title = 'chem'
        onPress={()=> this.props.navigation.navigate('Chem')}
        />
        <Button 
        title = 'physics'
        onPress={()=> this.props.navigation.navigate('Physics')}
        />
         <Button 
        title = 'AJava'
        onPress={()=> this.props.navigation.navigate('AJava')}
        />
        <Button 
        title = 'Biology'
        onPress={()=> this.props.navigation.navigate('Biology')}
        />
        <Button 
        title = 'GK'
        onPress={()=> this.props.navigation.navigate('Gk')}
        /> */}


        <TouchableOpacity   onPress = {() => this.props.navigation.navigate('Chem')}
           style={styles.signin_sub}
           >
             <Text style={styles.text}>CHEMISTRY</Text>
             </TouchableOpacity>

              <TouchableOpacity   onPress = {() => this.props.navigation.navigate('Physics')}
           style={styles.signin_sub}
           >
             <Text style={styles.text}>PHYSICS</Text>
             </TouchableOpacity>

              <TouchableOpacity   onPress = {() => this.props.navigation.navigate('AJava')}
           style={styles.signin_sub}
           >
             <Text style={styles.text}>AJAVA</Text>
             </TouchableOpacity>

              <TouchableOpacity   onPress = {() => this.props.navigation.navigate('Biology')}
           style={styles.signin_sub}
           >
             <Text style={styles.text}>BIOLOGY</Text>
             </TouchableOpacity>

              <TouchableOpacity   onPress = {() => this.props.navigation.navigate('Gk')}
           style={styles.signin_sub}
           >
             <Text style={styles.text}>GK</Text>
             </TouchableOpacity>
</ScrollView>
          </View>
          </ImageBackground>
      )
    }
    
    }

