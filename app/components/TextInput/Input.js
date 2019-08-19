import PropTypes from 'prop-types';
import React from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,Text,Button } from 'react-native';
import styles from './styles'
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from '../../Navigation'
const { width: WIDTH } = Dimensions.get("window");
const Input = ()=> {
    return (
      <View>
      <TextInput
          style={{
        height: 45,
        borderBottomWidth: 1,
        fontSize: 16,
        paddingLeft: 2,
        color: "rgba(255,255,255,0.7)",
        marginHorizontal: 25,width: WIDTH - 30}}
          placeholder={"Email or Username"}
          placeholderTextColor={"rgba(255, 255, 255,0.7)"}
          underlineColorAndroid="transparent"
          
         
        />

       <TouchableHighlight style={{
              width: WIDTH - 25,
              height: 45,
              borderRadius: 45,
              backgroundColor: "#432000",
              justifyContent: "center",
              marginTop: 20}}>
        <Text style={{
                color: "#fff",
                fontSize: 30,
                textAlign: "center"}}>Login
        </Text>
       </TouchableHighlight>
      
       
      </View>  
    
       
    )
    
    }

    // Input.propTypes = {
    //     onPress: PropTypes.func,
    //     button: PropTypes.string,
    // }
    export default Input;



