import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,Button,
  Dimensions,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

// import * as firebase from 'firebase'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
// import { FBLogin, FBLoginManager } from 'react-native-facebook-login'
import styles from '../../components/styles'
import {app} from '../../firebase/firrebase'


export default class Login extends Component {
    constructor() {
        super()
        this.state ={
            email : '',
            password : '',
            isAuthenticated  : false,
        }
        this.Anon=this.Anon.bind(this)
        this.Login=this.Login.bind(this)
        this.click=this.click.bind(this)

        this.click1=this.click1.bind(this)

    }
    // _signIn = async() => {
     
      
      
    //   try {
    //     // Add any configuration settings here:
    //     await GoogleSignin.configure();
      
    //     const data = await GoogleSignin.signIn();
      
    //     // create a new firebase credential with the token
    //     const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    //     // login with credential
    //     const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
    //   await  this.props.navigation.navigate('StackNav2')
    //     console.info(JSON.stringify(currentUser.user.toJSON()));
    //   } catch (e) {
    //     console.error(e);
    //   }
      
      
      
      
    //   }
    click = () => {
        

        this.props.navigation.navigate('Registration')

   }

    Login = async(email,password) => {

        try{

            await app.auth().signInWithEmailAndPassword(email,password).then(function(user){
                console.log(user)
            })
            // if(firebase.auth().signInWithEmailAndPassword(email,password)){
                this.props.navigation.navigate('StackNav2')

            // }

        }
        catch(error){
            console.log(error.toString())
        }


    }
click1 = () => {
    app.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}
    Anon = () => {
        
        app.auth().signInAnonymously()
            .then(() => {
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      // User is signed in.
                      var isAnonymous = user.isAnonymous;
                      var uid = user.uid;
                      // ...
                    } else {
                      // User is signed out.
                      // ...
                    }
                    // ...
                  });
                console.log('success ......!')
                this.setState({
                    isAuthenticated : true,
                })
            })
            .catch((error) => {
                console.log(`failed ......! = ${error}`)
            })
            this.props.navigation.navigate('StackNav2')

        
    }
    render(){
        let _this = this;

        return(
           <ImageBackground source={require('../../images/bg.jpg') }  style={styles.container}>
            <View style={[styles.inner]}>
            <KeyboardAvoidingView>
            <ScrollView>
              
            <View style={{ padding: deviceHeight * 0.04 ,marginTop : deviceHeight * 0.2}}>
        <Text>Enter Email Id :</Text>
        <TextInput
          // autoFocus
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}
          onChangeText = {(email) => this.setState({email})}
          placeholder={'Email Id ... '}
        />
        <Text>Enter Password :</Text>
        <TextInput
          // autoFocus
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}
          onChangeText = {(password) => this.setState({password})}
          secureTextEntry

          placeholder={'Password ... '}
        />
        <View style={styles.buttonlg} >
                <Button title="login" color="green"  onPress={()=>this.Login(this.state.email,this.state.password)}  />
</View>
<View style={styles.buttonlgst} >
        <Button title="Guest" color="green" style={styles.buttonlg} onPress={()=>this.Anon()}  />
        </View>
        
        {/* <GoogleSigninButton
    style={{width: deviceWidth * 0.88 , height: deviceHeight * 0.07,          marginBottom : deviceHeight * 0.07,    }}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn.bind(this)}
    /> */}
    {/* <FBLogin style={{ marginBottom: deviceHeight * 0.08,paddingTop : deviceHeight * 0.02,paddingBottom : deviceHeight * 0.02}}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onPress = {() => this.props.navigation.navigate('StackNav1')}
        onLogin={ function(data){
          // const { navigate } = props.navigation;

          console.log("Logged in!");
          console.log(data);
          // navigate('StackNav1')

          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
          
        }}
        onLoginFound={ function ( data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      /> */}
      </View>   
      </ScrollView> 
      </KeyboardAvoidingView>
      <View style = {styles.footer}>
                        <Text style={{fontFamily: 'Raleway',
                                fontWeight: '400',
                                      color: '#ffffff',fontSize : 18}}>
                            <Text >Dont't have account  , </Text>
                            <Text style={{fontWeight : 'bold',textDecorationLine : 'underline'}} onPress = {()=>this.click()}>  Sign UP</Text>
                            </Text>
                            </View>       
                </View>
                 </ ImageBackground>
        )
    }
}