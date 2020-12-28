import React from 'react';
import {
    View, 
    Text, 
    Button, 
    TouchableOpacity,
    Dimensions,
    Stylesheet,
    Image
} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../img/logo.jpeg')}
                style={styles.logo}
                resizeMode='stretch'
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Get Fit!</Text>
                <Text style={styles.text}> Sign in with account</Text>
                <TouchableOpacity 
                onPress={}
                
                >

                </TouchableOpacity>
                
            </View>         
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * .20;

const styles = Stylesheet.create({
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
    }

})