import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        humidity: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=bc228d0f0984263c49f92a53f8a95286`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    humidity: json.main.humidity,
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

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
        paddingTop: 25,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.6,
        backgroundColor: 'black',
        width: '100%',
        height:'60%'
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
