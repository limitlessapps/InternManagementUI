import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground} from 'react-native';
// import {Container} from '../components/Login'
import {Container, Header, Content, Form, Item, Input,Text,Button, CardItem, Footer,Card}from 'native-base';
import {DatePickers} from '../components/DatePicker'

class SignUpScreen extends Component{
    render(){

        return ( 
          <ImageBackground source={require('../components/Login/images/wallpaper.png' )}
        style={{flex: 1,
        width: null,
        height: null,
        justifyContent:'center',
        }}>
        <Text style={{
       paddingTop:50,
       textAlign: "center"}}>
        Sign Up
        </Text>
       
          <CardItem style={{
          }}>
        <Content>
          <Form style={{
          }}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Email Address" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <DatePickers/>
            </Item> 
            <Item last>
              <Input placeholder="confirm Password" />
            </Item>
            <Button success style={{paddingTop:10,
            alignItems:"center",
            justifyContent:"center",
            textAlign: "center"}} onPress={()=>this.props.navigation.navigate
         ('Home')}><Text> Sign Up 
            </Text></Button> 
          </Form>
        </Content>  
      </CardItem> 
      
      <Footer> 
      <TouchableHighlight 
        onPress={()=>this.props.navigation.navigate
         ('LoginScreen')}
      ><Text>Already an Account? Login</Text>
      </TouchableHighlight>
      </Footer>
     
      </ImageBackground>
          )  };
}
export default SignUpScreen;