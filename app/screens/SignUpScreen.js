import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground} from 'react-native';
import {Container, Header, Content, Form, Item, Input,Text,Button, CardItem, Footer,Card,DatePicker}from 'native-base';
import {DatePickers} from '../components/DatePicker'

class SignUpScreen extends Component{
    render(){

      return ( 
        <ImageBackground source={require('../../assets/images/wallpaper.png' )}
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
       
          <CardItem>

            <Content>

              <Form>

                <Item>
                  <Input placeholder="Username" />
                </Item>

                <Item>
                  <Input placeholder="Email Address" />
                </Item>

                <Item>
                <DatePicker
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date of Birth"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d2d2d2" }}
                onDateChange={this.setDate}
                disabled={false}
                />
                </Item>
                <Item>
                  <DatePickers/>
                </Item> 

                <Item>
                  <Input placeholder="Password" />
                </Item>
 
                <Item>
                  <Input placeholder="confirm Password" />
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
                      <Text> Sign Up </Text>
                    </Button> 
                </View>

              </Form>
            </Content>  
          </CardItem> 
      
     
          <TouchableHighlight 
            onPress={()=>this.props.navigation.navigate
            ('LoginScreen')}>
          
            <Text style={{backgroundColor:'white',
                color:'#20b2aa',
                textAlign:'center',
                alignItems:"center",
                justifyContent:"center",
                padding:16}}>
                Already an Account? Login
            </Text>
          
          </TouchableHighlight>
    
        </ImageBackground>
          )  };
}
export default SignUpScreen;