import React from 'react';
import {
    View, 
    Text, 
    Button, 
    Dimensions,
    Stylesheet,
    Image
} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../img/logo.png')}
                style={styles.logo}
                resizeMode='stretch'
                />
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>         
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * .20;

const styoles = Stylesheet.create({
    container: {
        flex: 1, 
        background: '#000000'
    }, 
    header: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1, 
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        paddingVertical: 50,
        paddingHorizontal: 30
    },

})