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
  AlertAndroid,
  Dimensions,
  Image
} from 'react-native';

import {createDrawerNavigator,createStackNavigator,createSwitchNavigator,DrawerItems} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
// import * as firebase from 'firebase'
import PropTypes from 'prop-types'
import {app} from './src/firebase/firrebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
// import rr from 'react'
import HomeMain from './src/home/home'
import Admin from './src/admin/admin'
import Chem from './src/subject/chem'
import Physics from './src/subject/physics'
import AJava from './src/subject/AJava'
import Biology from './src/subject/biology'
import Gk from './src/subject/gk'

import Home from './src/components/home/home'
import Login from './src/components/login/login'
import styles from './src/components/styles'
import Registration from './src/components/registration/registration'
// import HomeLogin from './src/components/home/homeLogin'
// import Networking from './src/component/networking/networking'
import Logout from './src/components/logout/logout'


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



const TabNav = createMaterialBottomTabNavigator({
  HomeMain : {screen : HomeMain,
    navigationOptions : {

      tabBarIcon : ({tintColor}) => (
        <IconFont name = 'home' color={tintColor} size={24}/>
      )
}}  ,
  Admin : {screen : Admin,
    navigationOptions : {

      tabBarIcon : ({tintColor}) => (
        <IconFont name = 'database' color={tintColor} size={24}/>
      )
}}

},{
  initialRouteName : 'HomeMain',
  activeTintColor : 'orange',
  barStyle: { backgroundColor: 'white' },
  shifting : true

})

const customDrawer = (props) => {
return(
  <View>
  <Image 
  style = {styles.drawerImage}
  source={require('./src/images/img2.png')}

  />
  <DrawerItems {...props} />
</ View>
)
}

const Drawer = createDrawerNavigator({
  Home : {screen : TabNav,
    navigationOptions : {
      drawerIcon : (
        ({tintColor}) => (
          <Icon name = 'public' color={tintColor} size={24}/>
        )      )
    }
  },
  Logout : {screen : Logout,
    navigationOptions : {
      drawerIcon : (
        ({tintColor}) => (
          <Icon name = 'style' color={tintColor} size={24}/>
        )      )
    }
  }
  
 
},{
  drawerPosition : 'left',
  drawerWidth : 300,
  drawerBackgroundColor : 'rgba(255,255,255,0.6)',
  contentComponent : customDrawer,
  // drawerOpenRoute : 'DrawerOpen',
  contentOptions : {
    activeTintColor : '#F1C40F',

  }
})
const St1 = createStackNavigator({
  Home : {screen : Home,
  navigationOptions : {
    title : 'Plzz ... Sign in',
    headerTitleStyle : {
      fontWeight : 'bold',
      textAlign : 'center',
      color : '#FFFFFF',
      marginLeft : deviceWidth * 0.3
      
  }
  }
  },
  Registration : {screen : Registration,
    navigationOptions : {
      title : 'Register a new account ....!',
      headerTitleStyle : {
        fontWeight : 'bold',
        textAlign : 'center',
        color : '#FFFFFF',
        marginLeft : deviceWidth * 0.1,
      }
    },
  },
  Login : {screen : Login,
    navigationOptions : {
      title : 'Login to your account ....!',
      headerTitleStyle : {
        fontWeight : 'bold',
        textAlign : 'center',
        color : '#FFFFFF',
        marginLeft : deviceWidth * 0.1,
        
    },
    headerStyle : {
      // marginBottom : deviceHeight * 0.4

    },

    style : {
      // marginBottom : deviceHeight * 0.4

    }
    }
  },
},{
  initialRouteName : 'Home',
  
  navigationOptions : {
    style: {
       

    },
    headerStyle : {
      

    },
    headerTransparent :true,
    
  }
})
const St2 = createStackNavigator({
  
  Main : {screen : Drawer },
 
},{
  initialRouteName: 'Main',
  
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    // headerBackground : rgba(255,255,255,0.3),
    headerLeft : (
   

      <IconFont name = 'align-justify'   style={styles.headerLeft}      color="#F1C40F"     size = {38}        onPress={() => navigation.openDrawer()}
      />
    ),
    headerTransparent :false,

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
})















// const Tab = createTabNavigator({
//   Home : {screen : Home},
//   admin : {screen : Admin}
// })


const Chem1 = createStackNavigator({
  chem : {screen : Chem}
},{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    // headerBackground : rgba(255,255,255,0.3),
    headerRight : (
   

      <IconFont name = 'arrow-circle-left'   style={styles.headerRight}      color="#F1C40F"     size = {38}        onPress={() => navigation.navigate('StackNav2')}
      />
    ),
    headerTransparent :false,

    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
})

const Physics1 = createStackNavigator({
  physics : {screen : Physics}
},{ navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // headerBackground : rgba(255,255,255,0.3),
  headerRight : (
 

    <IconFont name = 'arrow-circle-left'   style={styles.headerRight}      color="#F1C40F"     size = {38}        onPress={() => navigation.navigate('StackNav2')}
    />
  ),
  headerTransparent :false,

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}),})

const AJava1 = createStackNavigator({
  ajava : {screen : AJava}
},{ navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // headerBackground : rgba(255,255,255,0.3),
  headerRight : (
 

    <IconFont name = 'arrow-circle-left'   style={styles.headerRight}      color="#F1C40F"     size = {38}        onPress={() => navigation.navigate('StackNav2')}
    />
  ),
  headerTransparent :false,

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}),})
const Biology1 = createStackNavigator({
  biology : {screen : Biology}
},{ navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // headerBackground : rgba(255,255,255,0.3),
  headerRight : (
 

    <IconFont name = 'arrow-circle-left'   style={styles.headerRight}      color="#F1C40F"     size = {38}        onPress={() => navigation.navigate('StackNav2')}
    />
  ),
  headerTransparent :false,

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}),})

const Gk1 = createStackNavigator({
  gk : {screen : Gk}
},{ navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // headerBackground : rgba(255,255,255,0.3),
  headerRight : (
 

    <IconFont name = 'arrow-circle-left'   style={styles.headerRight}      color="#F1C40F"     size = {38}        onPress={() => navigation.navigate('StackNav2')}
    />
  ),
  headerTransparent :false,

  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}),})

const SwitchNav = createSwitchNavigator({
  StackNav1 : St1,
  StackNav2 : St2,
   Tab : TabNav,
  Chem : Chem1,
  Physics : Physics1,
  AJava : AJava1,
  Biology : Biology1,
  Gk : Gk1

},{
  initialRouteName : 'StackNav1'
}) 

// const Switchn = createSwitchNavigator({
//   Tab : Tab,
//   Chem : Chem1,
//   Physics : Physics1

// },{
//   initialRouteName : 'Tab'
// })

export default class App extends Component {
 
 

  render() {
    return (
     <View style={styles.container}>
      <SwitchNav />
         </View>
    );
  }
}





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
