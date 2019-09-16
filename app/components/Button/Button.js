import React, { Component } from 'react';
import {Button,View,TextInput,Dimensions,TouchableHighlight,ImageBackground,Text} from 'react-native';
import styles from './styles'
import PropTypes from 'prop-types';

const Buttons = (props) => {
    const {onPress,title} = props
  
    return (
        <View style={styles.viewButtons}>
            <Button style={styles.buttons} title={title}>
            {title}
            </Button>
        </View>
    )
}
Buttons.propTypes={
    title:PropTypes.string,
    onPress:PropTypes.func
    }
export default Buttons;