import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function getImage(imag_name) {
    switch(imag_name) {
      case 'Rain': return require('../rain.jpg') 
      case 'Sunny': return require('../sunny.jpg')
      case 'Thunderstorm': return require('../thunder.jpg')
      case 'Clouds': return require('../cloudy.jpg')
      case 'Drizzle': return require('../drizzle.jpg')
      case 'Haze': return require('../haze.jpg')
      case 'Mist': return require('../mist.jpg')
    }
}

function getIcon(icon_name) {
    switch(icon_name) {
        case 'Rain': return 'weather-rainy' 
        case 'Sunny': return 'weather-sunny'
        case 'Thunderstorm': return 'weather-lightning' 
        case 'Clouds': return 'weather-cloudy'
        case 'Drizzle': return 'weather-hail' 
        case 'Haze': return 'weather-hail' 
        case 'Mist': return 'weather-fog' 
    }
}

export default function Forecast(props){
    return (
        <ImageBackground source={getImage(props.main)} style={styles.backdrop}>
            <View>
                <Text style={styles.mainText}>{props.main}</Text>
                <View style={styles.iconics}>
                    <MaterialCommunityIcons size={48} name={getIcon(props.main)} color={'#fff'}/>
                </View>
                <Text style={styles.description}>{props.description}</Text>
                <View style={styles.text}>
                    <Text style={styles.subText}>Temperature</Text>
                    <Text style={styles.subText}>Humidity</Text>
                </View>
                <View style={styles.temp}>
                    <View style={styles.temp}>
                    <Text style={styles.num}>{props.temp}</Text>
                        <Text style={styles.unit}> °C</Text>
                    </View>
                    <View style={styles.temp}>
                        <Text style={styles.num}>{props.humidity}</Text>
                        <Text style={styles.unit}> %</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
  
const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        backgroundColor : 'black',
    },
    mainText: {
        fontSize : 40,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        color: 'white',
    },
    iconics:{
        flexDirection: 'row',  
        justifyContent: 'center',
    },
    description: {
        fontSize : 25,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        color: 'white',
    },
    subText: {
        fontSize : 20, 
        color: 'white',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop : 20,
        paddingBottom : 20
    },
    temp: {
        flexDirection: 'row',  
        justifyContent : 'space-around',
    },
    num: {
        fontSize : 30, 
        color: 'white',
    },
    unit: {
        fontSize : 22,  
        color: 'white',  
        textAlignVertical: 'center',     
    },
});
