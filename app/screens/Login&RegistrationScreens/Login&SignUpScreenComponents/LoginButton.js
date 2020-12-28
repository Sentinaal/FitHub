import React from 'react';

import { 
    ImageBackground, 
    StyleSheet,
    TouchableOpacity, 
    View, 
    Image, 
    Dimensions} 
    from 'react-native';

export function LoginButton ({title, style, onPress}) {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>

            <Text>title.toUpperCase()</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16, 
        fontWeight: '500',

    }

})