import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import {Headers} from '../components/Header';
import { Buttons } from '../components/Button';
class CheckScreen extends Component{
    render(){
        return(
        <View>
            <Headers text='Check in and Out'/>
            <Buttons text='Check In'/>
        </View>
         )} 
}
export default CheckScreen; 