import PropTypes from 'prop-types';
import React from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,Text,Button } from 'react-native';
import styles from './styles'
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


      
       
      </View>  
    
       
    )
    
    }

    // Input.propTypes = {
    //     onPress: PropTypes.func,
    //     button: PropTypes.string,
    // }
    export default Input;


