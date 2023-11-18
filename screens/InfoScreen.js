// OneButtonScreen.js

import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const OneButtonScreen = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // You can add your logic or navigation here based on the button press
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>1 pet => 10 points</Text>
      <Text style = {styles.text}>200 points => 1 bus ticket</Text>
      <Text style = {styles.text}>400 points => 1 hour parking</Text>
      <Text style = {styles.text}>150 points => 1 hour bike rent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
      fontSize: 28,
      marginBottom: 16,
    },
});

export default OneButtonScreen;