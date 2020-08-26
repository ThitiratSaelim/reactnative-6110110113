import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Forecast(props){
    let iconic = ""
    let img = ""
    if(props.main == 'Rain'){
        iconic = 'weather-rainy' 
        img = require('../rain.jpg')
    }
    if(props.main == 'Sunny'){
        iconic = 'weather-sunny'
        img = require('../sunny.jpg')
    }
    if(props.main == 'Thunderstorm'){
        iconic = 'weather-lightning' 
        img = require('../thunder.jpg')
    }
    if(props.main == 'Clouds'){
        iconic = 'weather-cloudy' 
        img = require('../cloudy.jpg')
    }
    if(props.main == 'Drizzle'){
        iconic = 'weather-hail' 
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Haze'){
        iconic = 'weather-hail' 
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Haze'){
        iconic = 'weather-hail' 
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Mist'){
        iconic = 'weather-fog' 
        img = require('../mist.jpg')
    }
    return (
        <ImageBackground source={img} style={styles.backdrop}>
            <View>
                <Text style={styles.mainText}>{props.main}</Text>
                <View style={styles.iconics}>
                    <MaterialCommunityIcons size={48} name={iconic} color={'#fff'}/>
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
    zipCode: {
        fontSize : 22,
        textAlign: 'center',
        color: 'white'
    },
    mainText: {
        fontSize : 40,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        color: 'white'
    },
    iconics:{
        flexDirection: 'row',  
        justifyContent: 'center'
    },
    description: {
        fontSize : 25,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        color: 'white'
    },
    temp: {
        flexDirection: 'row',  
        justifyContent : 'space-around'
    },
    num: {
        fontSize : 30, 
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
        justifyContent: 'space-around',
        paddingTop : 20,
        paddingBottom : 20
    },
    backdrop: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        backgroundColor : 'black'
    },
});
