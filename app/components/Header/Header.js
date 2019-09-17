import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { View, TextInput, Dimensions, TouchableHighlight, ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles'
const Headers = (props) => {
  const { text } = props

  return (

    <Header style={styles.header}>

      <Text style={styles.textHeader}>{text}</Text>

    </Header>

  );
};

Headers.propTypes = {
  text: PropTypes.string
}
export default Headers;
