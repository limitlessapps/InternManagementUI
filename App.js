import React,{Component} from 'react';
import Navigate from './app/Navigation/AppNavigator';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $white: '#FFFFFF',
  $lightSeaGreen: '#20b2aa',
  $lightGray: '#F0F0F0',
  $hexGray:'#707070',
  $hexLightGray:'#E6E6E6',
  $hexWhite:'#EFEFEF',
  $dodgerblue:'#1E90FF'
  
});


export default class App extends Component{
  render(){

  
  return (
    
     <Navigate/>
   
  );
}
}
