import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Chip = ({ text, backgroundColor }) => (
  <View style={[styles.container, {backgroundColor: backgroundColor || styles.container.backgroundColor}]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignSelf: 'baseline',
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 40,
    margin: 5
  },
  text: {
    fontSize: 15,
    color: 'white'
  }
})

export default Chip;