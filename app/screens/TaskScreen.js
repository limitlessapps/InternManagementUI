import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import {Headers} from '../components/Header';
import Icon from '@expo/vector-icons/Ionicons';
import styles from '../styles'
class TaskScreen extends Component{
    render(){
        return(
        <View>
            <Headers text='My Tasks'/>
            <Icon name="md-add" size={24} style={styles.addTask}/>
        </View>
         ) } 
}
export default TaskScreen; 