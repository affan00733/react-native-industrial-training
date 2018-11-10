
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
  Dimensions,
  KeyboardAvoidingView,
  ScrollView 
} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import PropTypes from 'prop-types'
import {app} from '../firebase/firrebase'
import styles from '../../src/components/styles'
const db = app.database()
const addItem =  (item,subject) => {
  db.ref('/root/items/'+subject).push().set({
      name: item
  });
  console.log(subject)

}
let itemsRef = db.ref( '/root/items' );

// class ItemComponent extends Component {

//     static propTypes = {
//         items: PropTypes.array.isRequired
//     };
  
//     render() {
//       return (
//         <View style={styles.itemsList}>
//           {this.props.items.map((item, index) => {
//               return (
//                   <View key={index}>
//                       <Text style={styles.itemtext}>{item.name}</Text>
//                   </View>
//               )
//           })}
//         </View>
//       );
//     }
//   }
export default class Admin extends Component {
    constructor(){
        super()
        
        this.state={
          name : '',
          error : false,
          items : [],
          subject : '',
          option1 : '',
          option2 : '',
          option3 : '',
          option4 : '',


    
        }
    
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);

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
      handleChange2(e) {
        this.setState({
          option1: e.nativeEvent.text
        });
        b = this.state.option1
    
      }
      handleChange3(e) {
        this.setState({
          option2: e.nativeEvent.text
        });
        b = this.state.option2
    
      }
      handleChange4(e) {
        this.setState({
          option3: e.nativeEvent.text
        });
        b = this.state.option3
    
      }
      handleChange5(e) {
        this.setState({
          option4: e.nativeEvent.text
        });
        b = this.state.option4
    
      }
      handleSubmit() {
       
      //    db.ref('/root/items/'+this.state.subject).push().set({
      //     name: this.state.name
      // });

      db.ref('/root/items/'+this.state.subject+'/'+this.state.name).push().set({
        option1: this.state.option1,
        option2: this.state.option2,
        option3: this.state.option3,
        option4: this.state.option4,

    });
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
          <ImageBackground source={require('../../src/images/bg.jpg') }  style={styles.container}>

          <View style={styles.inner}>
          <KeyboardAvoidingView>
            <ScrollView>
            <View style={{ padding: deviceHeight * 0.04 ,marginTop : deviceHeight * 0.2}}>
            <Text>Enter question : </Text>
          <TextInput 
          placeholder = 'Question'
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

          onChange={this.handleChange}
          // onChangeText = {() => this.setState({})}
          />
                      <Text>Enter subject : </Text>

           <TextInput 
          placeholder = 'Subject'
          style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

          onChange={this.handleChange1}
          // onChangeText = {() => this.setState({})}
          />

                 <Text>Enter option1 : </Text>

<TextInput 
placeholder = 'option1'
style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

onChange={this.handleChange2}
// onChangeText = {() => this.setState({})}
/>

     <Text>Enter option2 : </Text>

<TextInput 
placeholder = 'option1'
style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

onChange={this.handleChange3}
// onChangeText = {() => this.setState({})}
/>

     <Text>Enter option3 : </Text>

<TextInput 
placeholder = 'option1'
style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

onChange={this.handleChange4}
// onChangeText = {() => this.setState({})}
/>

     <Text>Enter option4 : </Text>

<TextInput 
placeholder = 'option1'
style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

onChange={this.handleChange5}
// onChangeText = {() => this.setState({})}
/>
            <View style={styles.buttonlg} >

          <Button 
          title ='add'
          color = 'green'
          onPress={this.handleSubmit}
          />
          </View>
              
                </View>
                </ScrollView> 
      </KeyboardAvoidingView>
            </View>
            </ImageBackground>
        );
      }
  
  }



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       // justifyContent: 'center',
//       // alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
//   });
  