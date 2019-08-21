import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
import styles from './styles'
export default class DatePickers extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      // <Container>
      //   <Header />
        <Content> 
          <DatePicker
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"} 
            androidMode={"default"}
            placeHolderText="Start date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />

            <DatePicker
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="End date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d2d2d2" }}
            onDateChange={this.setDate}
            disabled={false}
            />

      </Content>      
       
    );
  }
}
