import React, { Component } from 'react';
import { View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import {Headers} from '../components/Header';
import {Search} from '../components/Search'
import Icon from '@expo/vector-icons/Ionicons';
import Modals from '../components/Modal/Modal'
import styles from '../styles'
class TaskScreen extends Component{
  constructor(props) {
      super(props);

      this.state = {
          isModalsVisible:false,
      };
    }
    componentDidMount(){
        this.handleShowModals();
    }
      handleGoBack = () =>{

      }
      handleShowModals = () =>{
          this.setState({isModalsVisible: true});
      }
      handleDismissModals = () => {
          this.setState({isModalsVisible: false});
      }
  
    render(){
        return(
        <View>
            <Headers text='My Tasks'/>
            <Search/>
            <TouchableHighlight>
            <Icon name="md-add" size={24} style={styles.addTask}/>
            
           <Modals isVisible={this.state.isModalsVisible}
               onBackdropPress={this.handleDismissModals}
           />
                
            </TouchableHighlight>
        </View>
         ) } 
}
export default TaskScreen; 