import React, { Component } from 'react';
import { Image,View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text,TouchableOpacity} from 'react-native';
import {Headers} from '../components/Header';
import Icon from '@expo/vector-icons/Ionicons';
import {Search} from '../components/Search';
import styles from '../styles';

class HomeScreen extends Component{
    render(){
        return(
        <View>
            <Headers text='My Chats'/>
            <ScrollView>
              <Search/>
            <TouchableOpacity style={styles.homepage}>
            <Image style={styles.image}  source={require('../../assets/images/wallpaper.png')} />
        <Text>Hello</Text>
        </TouchableOpacity>    
            </ScrollView>
        </View>
         )}
}
export default HomeScreen; 