import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props){
    return (
        <View>
            <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.temp}>
                <Text style={styles.num}>{props.temp}</Text>
                <Text style={styles.unit}> °C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize : 40,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        color: 'white'
    },
    description: {
        fontSize : 22,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        color: 'white'
    },
    temp: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop: 15,
    },
    num: {
        fontSize : 40, 
        color: 'white'
    },
    unit: {
        fontSize : 22,  
        textAlignVertical: 'center',
        color: 'white'
    }
});
