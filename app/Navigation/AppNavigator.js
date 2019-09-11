import React, { Component } from 'react'
import {createStackNavigator,createBottomTabNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'
import CheckScreen from '../screens/CheckScreen'
import TaskScreen from '../screens/TaskScreen'
import MenuScreen from '../screens/MenuScreen'
import Icon from '@expo/vector-icons/Ionicons';

class Navigate extends Component{
    render(){

    return (
     
       <AppContainer/>  
     
    );
}
}
export default Navigate;

const BottomNavigator = createBottomTabNavigator({
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>(
      <Icon name="md-chatboxes" color={tintColor} size={24}/>
      )
      }
       },
        Check:{
          screen:CheckScreen,
          navigationOptions:{
            tabBarLabel:'Check',
            tabBarIcon:({tintColor})=>(
          <Icon name="md-checkmark-circle-outline" color={tintColor} size={24}/> 
      
         
            )
          }
  
        },
        Task:{
          screen:TaskScreen,
          navigationOptions:{
            tabBarLabel:'Task',
            tabBarIcon:({tintColor})=>(
          <Icon name="md-list-box" color={tintColor} size={24}/> 
      
         
            )
          }
        },
        Menu:{
          screen:MenuScreen,
          navigationOptions:{
            tabBarLabel:'Menu',
            tabBarIcon:({tintColor})=>(
          <Icon name="md-menu" color={tintColor} size={24}/> 
      
         
            )
          }
        }
      },{
        tabBarOptions:{
          activeTintColor:'#20b2aa', 
          inactiveTintColor:'grey',
          style:{
            backgroundColor:'white',
            borderTopWidth:0,
            shadowOffset:{width:5, height:3},
            shadowColor:'black',
            shadowOpacity:0.5, 
           
          }
        }
      });

const AppSwitchNavigator = createSwitchNavigator(
      {
        LoginScreen:{
            screen:LoginScreen,
             
        },
    
        SignUpScreen:{
            screen:SignUpScreen,
              
        },
        Home:{
           screen:BottomNavigator,
                        
                
                }
      },
      
    );
const AppContainer = createAppContainer (AppSwitchNavigator); 
  
