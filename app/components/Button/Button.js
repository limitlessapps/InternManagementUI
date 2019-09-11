import React, { Component } from 'react';
import {Button,View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import styles from './styles'
import PropTypes from 'prop-types';

const Buttons = (props) => {
    const {text} = props
  
    return (
        <View style={styles.viewButtons}>
            <Button style={styles.buttons}>
            <Text style={styles.textButtons}>{text}</Text>
            </Button>
        </View>
    )
}
Buttons.propTypes={
    text:PropTypes.string
    }
export default Buttons;