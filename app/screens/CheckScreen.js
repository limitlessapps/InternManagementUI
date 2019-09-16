import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text,TouchableOpacity} from 'react-native';
import {Headers} from '../components/Header';
import  styles from '../styles';
class CheckScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          //defauilt value of the date time
          date: '',
        };
      }
      componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        
        that.setState({
          //Setting the value of the date time
          date:
            date + '-' + month + '-' + year + '  ' + hours + ':' + min,
        });
      }
      state = {
          toggle: true,
      }
      _onPress(){
          const newState = !this.state.toggle;
          this.setState({toggle:newState})
    
      }
      render() {
          const {toggle} = this.state;
          const textValue = toggle ? "Check In":"Check Out";
          const buttonBg = toggle ? "dodgerblue":"red"
        return(
        <View>
            <Headers text='Check in and Out'/>
            <View>
            <Text>{this.state.date}</Text>
            </View>
            <View style={styles.check}>
            {/* <Buttons title='Check In'/> */}
            <TouchableOpacity onPress={()=>this._onPress()} style={styles.checkBackground}>
            <Text style={styles.checkText}>{textValue}</Text>
            </TouchableOpacity>
        </View>
        </View>
         )} 
}
export default CheckScreen; 