import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import styles from './styles'
import { StyleSheet, Text, View,SafeAreaView,
  TextInput} from 'react-native';
  
  const Search = () => {
  
    return ( 
 
       <View style={styles.search}>  
         <TextInput underlineColorAndroid="transparent" placeholder="search" placeholderTextColor="grey"/>
         
       </View>
     

    );
 
};

export default Search;
