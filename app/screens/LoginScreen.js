import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground} from 'react-native';
// import {Container} from '../components/Login'
import {Container, Header, Content, Form, Item, Input,Text,Button, CardItem, Footer}from 'native-base';


class LoginScreen extends Component{
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
        Login
        </Text>
          <CardItem style={{
          padding:20}}>
        <Content>
          <Form style={{
          }}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button success style={{paddingTop:10,
            alignItems:"center",
            justifyContent:"center",
            textAlign: "center"}} onPress={()=>this.props.navigation.navigate
         ('Home')}><Text> Success 
            </Text></Button> 
          </Form>
        </Content> 
      </CardItem>
      <Footer> 
      <Text>Don't have an account yet?</Text>
      </Footer>
      </ImageBackground>
          )  };
}
export default LoginScreen;