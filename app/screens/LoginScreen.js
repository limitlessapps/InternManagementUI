import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground} from 'react-native';
// import {Container} from '../components/Login'
import {Container, Header, Content, Form, Item, Input,Text,Button, CardItem, Footer,Card}from 'native-base';


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
            textAlign: "center"}}>Login
          </Text>
       
          <CardItem>

            <Content>

              <Form>

                <Item> 
                  <Input placeholder="Username" />
                </Item>

                <Item last>
                  <Input placeholder="Password" />
                </Item>
                <View style={{padding:50,
                       paddingBottom:0}}>
                    <Button success 
                      style={{
                      alignItems:"center",
                      justifyContent:"center",
                      textAlign: "center",
                      }} 
                      onPress={()=>this.props.navigation.navigate
                      ('Home')}>
                      <Text> Login </Text>
                    </Button> 
                </View>
                

               </Form>
               
            </Content> 
             
          </CardItem> 
      
          <TouchableHighlight 
            onPress={()=>this.props.navigation.navigate
            ('SignUpScreen')}>

           
              <Text style={{backgroundColor:'white',
                color:'#20b2aa',
                textAlign:'center',
                alignItems:"center",
                justifyContent:"center",
                padding:16}}>
                Don't have an account yet? Sign Up
              </Text>  
            
          </TouchableHighlight>
    
        </ImageBackground>

  )};
}
export default LoginScreen;