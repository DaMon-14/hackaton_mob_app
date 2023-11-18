// screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const AuthScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try{
        const apiUrl = 'http://10.0.2.2:5089/api/Customers/' + username + '&' + password;
        console.log('username:', typeof(username));
        // Make a POST request to the API with the provided credentials
            const response = await axios.post(apiUrl, {});
            navigation.navigate('Login');
    }catch(error){
        console.error('API Request Error:', error.message);
              // Handle error (e.g., show an error message to the user)
              Alert.alert('Error', 'Failed to authenticate. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Authentication Screen</Text>
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
      <Button color='#3cc26d' title="Authentificate" onPress={handleLogin} />
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

export default AuthScreen;