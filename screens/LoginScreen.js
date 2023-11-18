// screens/DetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import './Global.js';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Replace the following URL with your actual authentication API endpoint
            const apiUrl = 'http://10.0.2.2:5089/api/login/'+username+'/'+password;

            // Make a GET request to the API
            const response = await axios.get(apiUrl);


            const apiUrl1 = 'http://10.0.2.2:5089/api/points/'+username;
            const response1 = await axios.get(apiUrl1);
            // For simplicity, we'll just log the response data
            console.log('API Response:', response.data);

            if(response.data === 'correct password'){
                global.user = username;
                global.points = response1.data;
                navigation.navigate('Main');
                console.log("saved user:", global.points);
            }
        }catch (error) {
            console.error('API Request Error:', error.message);
            // Handle error (e.g., show an error message to the user)
            Alert.alert('Error', 'Failed to authenticate. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button color='#3cc26d' title="Login" onPress={handleLogin} />
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
        fontSize: 20,
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});

export default LoginScreen;