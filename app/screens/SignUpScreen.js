import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  TouchableHighlight,
  ImageBackground,
  Text
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  CardItem,
  Footer,
  Card,
  DatePicker
} from 'native-base';
import styles from '../styles'
import Datepicker from '../components/DatePicker/DatePickers';
class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({
      chosenDate: newDate
    });
  }
  render() {

    return ( 
    <Container source = {
        require('../../assets/images/wallpaper.png')
      }
      style = {styles.backgroundImage} >
      <Text style = {
        styles.textLogin}>Sign Up 
        </Text>

      <CardItem>

      <Content>

      <Form>

      <Item>
      <Input placeholder = "Username" />
      </Item>

      <Item>
      <Input placeholder = "Email Address" />
      </Item>

      <Item>
      <Datepicker onDateChange = {this.setDate}
      placeholder = "start date" />
      </Item> 

      <Item>
      <Datepicker onDateChange = {this.setDate}
      placeholder = "End date" />
      </Item> 

      <Item>
      <Input placeholder = "Password" />
      </Item>

      <Item>
      <Input placeholder = "confirm Password" />
      </Item>

      <View style = {
        styles.viewButton}>
      <Button success style = {
        styles.button}onPress = {
        () => this.props.navigation.navigate('Home')
      }>
      <Text style = {
        styles.textButton}> Sign Up </Text> 
        </Button>  
        </View>

      </Form> 
      </Content>   
      </CardItem> 


      <TouchableHighlight onPress = {
        () => this.props.navigation.navigate('LoginScreen') }>

      <Text style = {
        styles.textSwitch}>Already an Account ? Login 
        </Text>

      </TouchableHighlight>

      </Container>
    )
  };
}
export default SignUpScreen;