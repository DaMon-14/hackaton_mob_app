// screens/ProfileScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import './Global.js';

const MainScreen = ({ navigation }) => {
    const handleButtonPress = () => {
        console.log('Button pressed!');
        navigation.navigate('Services');
        // You can add your logic or navigation here based on the button press
    };

    const handleQRButtonPress = () => {
        console.log('QR Button pressed!');
        navigation.navigate('QR');
        // You can add your logic or navigation here based on the button press
    };

    const handleInfoButtonPress = () => {
        console.log('Info Button pressed!');
        navigation.navigate('Info');
        // You can add your logic or navigation here based on the button press
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{global.points} points</Text>
            <Text>Name: {global.user}</Text>
            <Button color='#3cc26d' title="Services" onPress={handleButtonPress} />
            <Button color='#3cc26d' title="QR" onPress={handleQRButtonPress} />
            <Button color='#3cc26d' title="Info" onPress={handleInfoButtonPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 30,
        marginBottom: 100,
    },
    button: {
        marginHorizontal:200,
        width:'200%',
        alignItems: 'center',
        marginVertical: 30,
        justifyContent:'center'
    },
});

export default MainScreen;