import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Dimensions
} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


 export default  styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,.7)',
      // height : deviceHeight ,
      // width : deviceWidth  ,
    },
    container1: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      // backgroundColor: 'rgba(255,255,255,.7)',
      // height : deviceHeight ,
      // width : deviceWidth  ,
    },
    signin : {
        marginTop : deviceHeight * 0.3,
        margin : deviceHeight * 0.14,
        backgroundColor: '#6c56b7',
        alignItems: "stretch",
        height : deviceHeight * 0.08,
        borderRadius : deviceHeight * 0.2 ,
        width : deviceWidth * 0.5 
      },
      signin_sub : {
        marginTop : deviceHeight * 0.01,
        margin : deviceHeight * 0.14,
        backgroundColor: '#6c56b7',
        alignItems: "stretch",
        height : deviceHeight * 0.08,
        borderRadius : deviceHeight * 0.2 ,
        width : deviceWidth * 0.5 
      },
      inner  : {
        flex : 1,

        height : deviceHeight,
        width : deviceWidth,
        backgroundColor: 'rgba(255,255,255,.3)',

      },
      text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        letterSpacing: 3,
        marginTop : deviceHeight * 0.02
    },
    footer :{  flex: 1,
            position: 'absolute',
            backgroundColor: 'rgba(139, 113, 227, 0.6)',
            bottom: 0,
            right: 0,
            left: 0,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'

            
        },

        headerLeft : {
          marginLeft : deviceWidth * 0.05,
          marginTop : deviceHeight * 0.05,
          marginBottom : deviceHeight * 0.05,

        },
        headerRight : {
          marginLeft : deviceWidth * 0.05,
          marginRight : deviceWidth * 0.05,

          marginTop : deviceHeight * 0.05,
          marginBottom : deviceHeight * 0.05,

        },
        drawerImage : {
          marginTop : deviceHeight * 0.07,
          marginBottom : deviceHeight * 0.1,
          marginLeft : deviceWidth * 0.1,
          height : deviceHeight * 0.3,
          width : deviceWidth * 0.5
        },
       buttonlg : {
          marginBottom : deviceHeight * 0.07,
          marginTop : deviceHeight * 0.04

       },
       buttonlgst : {
        marginBottom : deviceHeight * 0.07
     },
     itemtext : {
       textAlign : 'center',
       color : 'white',
       fontWeight : 'bold',
       fontSize : 30,
      //  textShadowRadius : 30
      // textDecorationStyle : 'double'
     }
  });

