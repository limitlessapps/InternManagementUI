import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import PropTypes from 'prop-types';

const Modals = ({ isVisible, onBackdropPress, }) => {
  <Modal isVisible={isVisible}
    onBackdropPress={onBackdropPress}>

  </Modal>
};
Modals.propTypes = {
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
};

export default Modals;