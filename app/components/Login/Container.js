import React from 'react';
import {Text,ImageBackground,View} from 'react-native';
import {Input} from '../TextInput';
import styles from './styles';

// import LinearGradient  from 'react-native-linear-gradient'
const Container = ()=> {
return (
    // <LinearGradient colors={['rgba(0,0,0,0.5)','rgba(0,0,0,0.5)']}>
    <ImageBackground source={require('./images/wallpaper.png' )}
        style={{flex: 1,
        width: null,
        height: null,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'rgba(0,0,0,0.5)',
        }}>
      <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>   
      <Input/>
      <Input/>
      </View>   
       
    </ImageBackground>
    // </LinearGradient>
)
}
export default Container;