import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import {Headers} from '../components/Header';

class MenuScreen extends Component{
    render(){
        return(
        <View>
            <Headers text='Settings'/>
        </View>
         ) } 
}
export default MenuScreen; 