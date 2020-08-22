import React, { useState } from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.zipCode}>Zip Code is <Text>{props.zipCode}</Text></Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.6,
        backgroundColor: 'black',
        width: '100%',
        height:'45%'
    },
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zipCode: {
        fontSize : 22,
        textAlign: 'center',
        color: 'white'
    }
});
