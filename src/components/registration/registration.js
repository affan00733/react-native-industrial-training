import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,Button,
  Dimensions,
  ImageBackground,KeyboardAvoidingView,ScrollView
} from 'react-native';
// import * as firebase from 'firebase'
import {app} from '../../firebase/firrebase'
// import firebase from 'react-native-firebase'
import styles from '../../components/styles'
// import app from '../../../export'
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Registration extends Component {
    constructor() {
        super()
        this.state ={
            email : '',
            password : '',
            isAuthenticated  : false,
        }
        this.SignUpUser=this.SignUpUser.bind(this)
        // this.click1=this.click1.bind(this)



    }

    SignUpUser = async(Email,Password) => {

        try{
            if(this.state.password.length < 6){
                alert('please enter password 6 character')
                return ;
            }

         await   app.auth().createUserWithEmailAndPassword(Email,Password)
         await this.props.navigation.navigate('Login')
        }

        catch(error){
            console.log(error.toString())
        }
    }





    
    render(){
        return(
           <ImageBackground source={require('../../images/bg.jpg') }  style={styles.container}>
            <View style={styles.inner}>
            <KeyboardAvoidingView>
            <ScrollView>
            <View style={{ padding: deviceHeight * 0.04 ,marginTop : deviceHeight * 0.25 }}>
        <Text>Enter Email Id :</Text>
        <TextInput
          
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}
          onChangeText = {(email) => this.setState({email})}
          placeholder={'Email Id ... '}
        />
        <Text>Enter Password :</Text>
        <TextInput
          
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}
          onChangeText = {(password) => this.setState({password})}
            secureTextEntry
          placeholder={'Password ... '}
        />
                <View style={styles.buttonlg} >

        <Button title="Sign Up" color="green" onPress={()=>this.SignUpUser(this.state.email,this.state.password)}  />
</View>

      </View>          
      </ ScrollView>
</KeyboardAvoidingView>
           <View style = {styles.footer}>
                        <Text style={{fontFamily: 'Raleway',
                                fontWeight: '400',
                                      color: '#ffffff',fontSize : 18}}>
                            <Text >Already have an Account , </Text>
                            <Text style={{fontWeight : 'bold',textDecorationLine : 'underline'}} onPress = {()=>this.props.navigation.navigate('Login')}>  Login IN</Text>
                            </Text>
                            </View>

                </View>
                </ ImageBackground>
        )
    }
}