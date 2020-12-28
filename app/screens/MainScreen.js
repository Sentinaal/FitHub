import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from 'react-native';

function mainScreen(props) {
    return (
        <ImageBackground blurRadius={3} source={require('../img/bg.jpg')} style={styles.container}>
            <Image blurRadius={3} source = {require('../img/randoWorkouts.jpg')} style = {styles.randoWorkouts}/>
            <Image blurRadius={1} source = {require('../img/data.jpeg')} style = {styles.data}/>
            <Image blurRadius={3} source = {require('../img/customWorkouts.jpg')} style = {styles.customWorkouts}/>
            <Image blurRadius={3} source = {require('../img/lifestyle.jpg')} style = {styles.lifestyle}/>
            <Image blurRadius={3} source = {require('../img/support.png')} style = {styles.support}/>
            <Image blurRadius={3} source = {require('../img/userPrefs.jpg')} style = {styles.userPrefs}/>
            <Image blurRadius={3} source = {require('../img/challenges.jpg')} style = {styles.challenges}/>
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    randoWorkouts: {
        width: '45%',
        height: '20%',
        position: 'absolute',
        top: 150,
        left: 12,
        borderWidth: 2,
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
        width: 320,
        height: '10%',
        position: 'relative',
        top: 755,
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius:10
    }
})


export default mainScreen;