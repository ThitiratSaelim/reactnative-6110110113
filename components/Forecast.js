import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Forecast(props){
    let iconic = ""
    switch(props.main){
        case 'Rain' : iconic = 'weather-rainy' 
            break;
        case 'Clear' : iconic = 'weather-sunny' 
            break;
        case 'Thunderstorm' : iconic = 'weather-lightning'
            break;
        case 'Clouds' : iconic = 'weather-cloudy'
            break;
        case 'Drizzle' : iconic = 'weather-hail'
            break;
        case 'Haze' : iconic = 'weather-fog'
            break;
        case 'Mist' : iconic = 'weather-fog'
            break;
    }
    return (
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <View style={styles.iconics}>
                <MaterialCommunityIcons size={48} name={(iconic)} color={'#fff'}/>
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
    );
}
  
const styles = StyleSheet.create({
    mainText: {
        fontSize : 40,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        color: 'white'
    },
    iconics:{
        flexDirection: 'row',  
        justifyContent: 'center'
    },
    description: {
        fontSize : 25,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 30,
        color: 'white'
    },
    temp: {
        flexDirection: 'row',  
        justifyContent: 'space-around'
    },
    num: {
        fontSize : 40, 
        color: 'white',
    },
    unit: {
        fontSize : 22,  
        color: 'white',  
        textAlignVertical: 'center'     
    },
    subText: {
        fontSize : 20, 
        color: 'white'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
