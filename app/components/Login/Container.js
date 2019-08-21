import React from 'react';
import {Text,ImageBackground,View,TouchableHighlight} from 'react-native';
import {Input} from '../TextInput';
import styles from './styles';


const Container = ()=> {
return (
    
    <ImageBackground source={require('./images/wallpaper.png' )}
        style={{flex: 1,
        width: null,
        height: null,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'rgba(0,0,0,0.5)',
        }}>
      <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>   
      {/* <Input/>
      <Input/>
      <TouchableHighlight style={{
             
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
       </TouchableHighlight> */}
      </View>   
       
    </ImageBackground>
   
)
}
export default Container;