import React, { useState, Component } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight, TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SearchInput, { createFilter } from 'react-native-search-filter';

const availableZipItems = [
    { place: 'Hatyai', code: '90110', background : require('../hatyai.jpg') },
    { place: 'Trang', code: '92000', background :require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000', background : require('../chiangmai.jpg')},
    { place: 'Khonkaen', code: '40000', background : require('../khonkaen.jpg')},
    { place: 'Chonburi', code: '20000', background : require('../chonburi.jpg')},
]

const KEYS_TO_FILTERS = ['place', 'code'];
   
const ZipItem = ({place, code, background, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <View style={styles.items}>
                
                <Text style={styles.textSize}>{code}</Text>
            </View>
            <Image source={background} style={styles.background}></Image>
        </View>
    </TouchableHighlight>
)

export default class ZipCodeScreen extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchAttribute: "place",
            ignoreCase: true
        }
      }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    
    render(){
        const filteredPlace = availableZipItems.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder = 'Search Place For Code'
                placeholderTextColor = 'grey'
                underlineColorAndroid= "transparent"
                onChangeText={(term) => { this.searchUpdated(term) }} 
                style = {styles.search}
            />
            <ScrollView >
                {filteredPlace.map(availableZipItems => {
                    return (
                        <TouchableOpacity onPress={()=>alert("Zipcode : "+availableZipItems.code)}>
                            <View style={styles.searchstyle}>
                                <Text style={styles.textSearch}>{availableZipItems.place}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={this.props.navigation}/>}
            />
        </SafeAreaView>
    )    
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    zipItem: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: 100,
    },
    textSize: {
        fontSize: 20,
    },
    searchstyle: {
        flexDirection: 'row',
        paddingLeft: 15,
        backgroundColor:'#FF0066',
        marginVertical: 2,
        marginHorizontal: 16,
        borderRadius: 15,
    },
    textSearch: {
        color: 'white',
        fontSize: 15,
    },
    search: {
        height : 40,
        fontSize: 15,
        paddingLeft: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: 'grey'
    }
})