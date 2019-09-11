import React, { Component } from "react";
import { Container, Header, Content, DatePicker, Text } from "native-base";
import styles from "./styles";
import PropTypes from 'prop-types';
const Datepicker = (props) => {
  const {placeholder,onDateChange}=props
  return (

    <Content>
      <DatePicker
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText={placeholder}
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#d2d2d2" }}
        onDateChange={onDateChange}
        disabled={false}/>
    </Content>
  );
};
Datepicker.propTypes={
onDateChange: PropTypes.func,
placeholder:PropTypes.string
}
export default Datepicker;
