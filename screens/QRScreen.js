// CameraScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        try{
            if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                console.log('Photo taken:', photo);
                // You can add your logic to handle the taken photo
                var addedpoints = 200;
                const apiUrl = 'http://10.0.2.2:5089/api/AddPoints/' + global.user + '&'+addedpoints;
                // Make a POST request to the API with the provided credentials\
                const response = await axios.post(apiUrl, {});
                navigation.navigate('Login');
            }
        }catch(error){
            console.error('API Request Error:', error.message);
            // Handle error (e.g., show an error message to the user)
            Alert.alert('Error', 'Failed to authenticate. Please try again.');
        }
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.buttonText}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
});

export default CameraScreen;