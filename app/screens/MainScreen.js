import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Dimensions} from 'react-native';

function mainScreen(props) {
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(31, 31, 31, 1)'}}>
            <View style = {styles.container}>
            <Image source = {require('../img/logo.png')} style = {styles.logo}/>
            <Image blurRadius = {3} source = {require('../img/randoWorkouts.jpg')} style = {styles.randoWorkouts}/>
            <Image source = {require('../img/data.jpeg')} style = {styles.data}/>
            <Image source = {require('../img/customWorkouts.jpg')} style = {styles.customWorkouts}/>
            <Image source = {require('../img/lifestyle.jpg')} style = {styles.lifestyle}/>
            <Image source = {require('../img/support.png')} style = {styles.support}/>
            <Image source = {require('../img/userPrefs.jpg')} style = {styles.userPrefs}/>
            <Image source = {require('../img/challenges.jpg')} style = {styles.challenges}/>
            <Image source = {require('../img/logo.png')} style = {styles.logo}/>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(31, 31, 31, 1)'

    },
    randoWorkouts: {
        width: 416,
        height: '30%',
        position: 'absolute',
        top: -1,
        left: -1,
        borderWidth: 1,
        borderColor: '#696969',
        borderRadius:10,
    },
    data: {
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 150,
        right: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:10
    },
    customWorkouts:{
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 350,
        left: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:10
    },
    lifestyle: {
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 350,
        right: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:10
    },
    support:{
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 550,
        left: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:20
    },
    userPrefs:{
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 550,
        right: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:20
    },
    challenges:{
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 150,
        right: 12,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:10
    },
    logo:{
        position: 'absolute',
        width: '65%',
        height: '6%',
        top: 30,
        resizeMode: 'contain'
    },
})


export default mainScreen;