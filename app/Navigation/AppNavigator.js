import React, { Component } from 'react'
import {createStackNavigator,createBottomTabNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'
import Icon from '@expo/vector-icons/Ionicons';

class Navigate extends Component{
    render(){

    return (
     
     
       <AppContainer/>  
     
       
     
    );
}
}
export default Navigate;

// const AppNavigator = createStackNavigator({
//     LoginScreen:{
//         screen:LoginScreen,
         
//     },

//     SignUpScreen:{
//         screen:SignUpScreen,
          
//     },
    
// });
// const AppTabNavigator = createBottomTabNavigator({
//     Home:{
//         screen:HomeScreen,
//         navigationOptions:{
//             tabBarLabel:"Home",
//             tabBarIcon:({tintColor}) => (
//                 <Icon name="home" size={25} color={tintColor}/>
//             )
//         }
            
    
//     },
//     Home:{
//         screen:HomeScreen,
//         navigationOptions:{
//             tabBarLabel:"Home",
//             tabBarIcon:({tintColor}) => (
//                 <Icon name="home" size={25} color={tintColor}/>
//             )
//         }
            
    
//     }
   
//     },
//     // {
//     //     tabBarOptions:{
//     //         style:{
//     //             paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
//     //         }
//     //     }
// );

const AppSwitchNavigator = createSwitchNavigator(
      {
        LoginScreen:{
            screen:LoginScreen,
             
        },
    
        SignUpScreen:{
            screen:SignUpScreen,
              
        },
        Home:{
                    screen:HomeScreen,
                    navigationOptions:{
                        tabBarLabel:"Home",
                        tabBarIcon:({tintColor}) => (
                            <Icon name="home" size={25} color={tintColor}/>
                        )
                    }
                        
                
                }
      },
      
    );
const AppContainer = createAppContainer (AppSwitchNavigator); 
  
// export default createAppContainer