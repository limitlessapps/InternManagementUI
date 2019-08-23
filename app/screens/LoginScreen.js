import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import {Container, Header, Content, Form, Item, Input,Button, CardItem, Footer,Card}from 'native-base';
import styles from '../styles'

class LoginScreen extends Component{
    render(){

      return ( 
        <ImageBackground source={require('../../assets/images/wallpaper.png' )}
            style={styles.backgroundImage}>

          <Text style={styles.textLogin}>Login
          </Text>
       
          <CardItem>

            <Content>

              <Form>

                <Item> 
                  <Input placeholder="Username" />
                </Item>

                <Item>
                  <Input placeholder="Password" />
                </Item>
                <View style={styles.viewLogin}>
                    <Button success 
                      style={styles.button} 
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

           
              <Text style={styles.textSwitch}>
                Don't have an account yet? Sign Up
              </Text>  
            
          </TouchableHighlight>
    
        </ImageBackground>

  )};
}
export default LoginScreen;