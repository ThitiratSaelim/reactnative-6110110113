import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const availableZipItems = [
    { place: 'Hatyai', code: '90110', background : require('../hatyai.jpg') },
    { place: 'Trang', code: '92000', background :require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000', background : require('../chiangmai.jpg')},
    { place: 'Khonkaen', code: '40000', background : require('../khonkaen.jpg')},
    { place: 'Chonburi', code: '20000', background : require('../chonburi.jpg')},
]
   
const ZipItem = ({place, code, background, navigation}) => (
    <TouchableHighlight onPress={() => {
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

export default function ZipCodeScreen(){
    
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </SafeAreaView>
    )    
}

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
        marginVertical: 8,
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
    }
})