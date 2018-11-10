
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
  ImageBackground,Dimensions
} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
import PropTypes from 'prop-types'
import {app} from '../firebase/firrebase'
import styles from '../components/styles'


const db = app.database()

let itemsRef = db.ref( '/root/items/gk' );

class ItemComponent extends Component {

    constructor(){
        super()
        this.state={
            answer : '',
            name : '',
          error : false,
          items : [],
          subject : '',
          index : 0,
          item : [],
          val : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    handleChange(e) {
        this.setState({
          answer: e.nativeEvent.text
        });
      }
      handleSubmit() {
       
        console.log(this.props.items.length)
       this.setState({item : this.props.items,val : this.props.items[this.state.index].name})



        if(this.state.index <= this.props.items.length-1){
                    db.ref('/root/answers/gk/'+this.props.items[this.state.index].name).push().set(
                      {answers : this.state.answer}
                  );

                  if(this.state.index == this.props.items.length - 1){
                    // this.props.navigation.navigate('StackNav1')
                    this.props.navigate('StackNav1')
                      alert('submited')
                  }

                  else{
                    
                    this.setState({index : this.state.index + 1})
                  }
             }
          
                 
                  else{
                    alert('test completed1')
          
                  }

        
    }

    render() {
      return (
        <View style={styles.itemsList}>
          {/* {this.props.items.map((item, index) => {
              return (
                  <View key={index}>
                        <Text style={styles.itemtext}>{items[this.state.index].name}</Text>
                                <TextInput 
        placeholder = 'subject'
        onChange={this.handleChange}
                      />
                  </View>
              )
          })} */}
                      <View style={{ padding: deviceHeight * 0.04 ,marginTop : deviceHeight * 0.2}}>

                                <Text style={styles.itemtext}>{this.props.items[this.state.index].name}</Text>
                                <TextInput 
        placeholder = 'Answer'
        style={{ height: deviceHeight * 0.06, marginTop: deviceHeight * 0.02, marginBottom: deviceHeight * 0.02 }}

        onChange={this.handleChange}
                      />
                                  <View style={styles.buttonlg} >

        <Button 
          title ='Next'
          color='green'
          onPress={this.handleSubmit}
          />
          </View>
         </View>
        </View>
      );
    }
  }

export default class Gk extends Component {
  constructor(){
    super()
    this.state = {
        name : '',
        error : false,
        items : [],
        subject : '',
        answer : '',
        index : 0
    }
    this.renderItem = this.renderItem.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderItem = ({item,index}) => {
    
    return(
      <Text>{item.name}</Text>
    )

  }
//   handleChange(e) {
//     this.setState({
//       answer: e.nativeEvent.text
//     });
//   }
//   handleSubmit() {
//     // addItem(this.state.name,this.state.subject);
   
//     //  b = this.state.subject
//     db.ref('/root/answers/'+this.state.answer).push().set({
//         answers : this.state.answer
//     });
   
// }
  componentDidMount(){
   itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let items = Object.values(data);
          this.setState({items});
       });
  }
  
  render(){
    return(
      <ImageBackground source={require('../../src/images/bg.jpg') }  style={styles.container}>

      <View style={styles.inner}>
      

       <View>
    
    {
              this.state.items.length > 0
              ? <ItemComponent items={this.state.items} navigate={this.props.navigation.navigate} />
              : <Text>No items</Text>
          }
    </View>
    {/* <TextInput 
        placeholder = 'subject'
        onChange={this.handleChange}
                      />
          */}
          
        </View>
        </ImageBackground>
    )
  }
  
  }



