import React, { Component } from 'react';
import { View, TextInput, Dimensions, TouchableHighlight, ImageBackground, Text } from 'react-native';
import { Headers } from '../components/Header';
import { styles } from '../components/Search';

class MenuScreen extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View>
                    <Headers text='Settings' />
                    <TouchableOpacity>
                        <Text>hello</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
}
export default MenuScreen; 