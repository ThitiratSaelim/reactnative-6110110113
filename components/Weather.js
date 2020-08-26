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
        <View style={styles.container}>
            <ImageBackground source={require('../location.png')} style={styles.backdrop}>
                <Text style={styles.zipCode}>Zip Code</Text> 
                <Text style={styles.zipCode}> is</Text>
                <Text style={styles.zipCode}>{props.zipCode}</Text> 
            </ImageBackground>
            <Forecast {...forecastInfo}/>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
    },
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 150,
        paddingTop : 10,
        
    },
    zipCode: {
        fontSize : 22,
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
        paddingLeft: 80
    }
});
