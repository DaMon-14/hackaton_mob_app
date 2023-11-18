// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                color='#3cc26d'
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                color='#3cc26d'
                title="Go to Autentification"
                onPress={() => navigation.navigate('Auth')}
            />
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
        fontSize: 20,
    },
});

export default HomeScreen;