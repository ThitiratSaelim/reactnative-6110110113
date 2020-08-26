import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableHighlight, TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { createFilter } from 'react-native-search-filter';

const availableZipItems = [
    { place: 'Hatyai', code: '90110', background : require('../hatyai.jpg') },
    { place: 'Trang', code: '92000', background :require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000', background : require('../chiangmai.jpg')},
    { place: 'Khonkaen', code: '40000', background : require('../khonkaen.jpg')},
    { place: 'Chonburi', code: '20000', background : require('../chonburi.jpg')},
]

const KEYS_TO_FILTERS = ['place', 'code'];
   
const ZipItem = ({place, code, background, navigation}) => (
    <TouchableHighlight  underlayColor='#669999' onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <View style={styles.items}>
                <Text style={styles.textSize}>{place}</Text>
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
            searchTerm: '',
            searchAttribute: 'place',
            ignoreCase: true
        }
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    
    render(){
        const filteredPlace = availableZipItems.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <SafeAreaView style={styles.container}>
                    <TextInput
                        placeholder = 'Search Place For ZipCode'
                        placeholderTextColor = 'grey'
                        underlineColorAndroid= "transparent"
                        onChangeText={(term) => { this.searchUpdated(term) }} 
                        style = {styles.search}
                    />
                    <ScrollView data = {availableZipItems} style={styles.scroll}>
                        {filteredPlace.map((availableZipItems,index) => {
                            return (
                                <TouchableOpacity  key={index} onPress={()=>alert(availableZipItems.code)}>
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
            </ImageBackground>
        )    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    backdrop: {
        width: '100%',
        height: '100%',
    },
    zipItem: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#99ffcc',
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
    textSearch: {
        color: 'white',
        fontSize: 15,
    },
    searchstyle: {
        paddingLeft: 15,
        backgroundColor: '#33cccc',
        marginVertical: 1,
        marginHorizontal: 16,
        borderRadius: 15,
    },
    search: {
        height: 25,
        fontSize: 15,
        paddingLeft: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: 'grey',
    },
    scroll: {
        height : 50,
    }
})
