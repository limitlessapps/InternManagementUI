import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
 
const AppNavigator = createStackNavigator({
    LoginScreen:{
        screen:LoginScreen,
         
    },

    SignUpScreen:{
        screen:SignUpScreen,
          
    },
    
});
export default createAppContainer(AppNavigator);