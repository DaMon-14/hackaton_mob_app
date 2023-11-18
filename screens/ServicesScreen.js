// OneButtonScreen.js
import React from 'react';
import { View, Button, StyleSheet, ToastAndroid } from 'react-native';
import './Global.js';
import axios from 'axios';

const ServiceScreen =  () => {
    const handleButtonPress1 = async () => {
        if(global.points >=200){
            console.log('Bilete Bus pressed!');
            const apiUrl = 'http://10.0.2.2:5089/api/AddPoints/' + global.user + '&-200';
                // Make a POST request to the API with the provided credentials\
                const response = await axios.post(apiUrl, {});
            ToastAndroid.show('purchased bus ticket please relog in to actualize points', ToastAndroid.SHORT);
        }else{
            ToastAndroid.show('not enough points', ToastAndroid.SHORT);
        }
    };

    const handleButtonPress2 = async() => {
        if(global.points >=400){
            console.log('Bilete Parcare pressed!');
            const apiUrl = 'http://10.0.2.2:5089/api/AddPoints/' + global.user + '&-400';
            // Make a POST request to the API with the provided credentials\
            const response = await axios.post(apiUrl, {});
            ToastAndroid.show('purchased parking ticket please relog in to actualize points', ToastAndroid.SHORT);
        }else{
            ToastAndroid.show('not enough points', ToastAndroid.SHORT);
        }
    };

    const handleButtonPress3 = async() => {
        if(global.points >=150){
            console.log('Bicicleta pressed!');
            const apiUrl = 'http://10.0.2.2:5089/api/AddPoints/' + global.user + '&-150';
            // Make a POST request to the API with the provided credentials\
            const response = await axios.post(apiUrl, {});
            ToastAndroid.show('purchased 1h rent bike please relog in to actualize points', ToastAndroid.SHORT);
        }else{
            oastAndroid.show('not enough points', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <Button color='#3cc26d' title="Bilete Bus" onPress={handleButtonPress1} />
            <Button color='#3cc26d' title="Bilet Parcare" onPress={handleButtonPress2} />
            <Button color='#3cc26d' title="Biciclete" onPress={handleButtonPress3} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'top',
        padding:100,

    },
});

export default ServiceScreen;