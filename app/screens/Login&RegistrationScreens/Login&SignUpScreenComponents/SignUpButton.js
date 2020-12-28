import React from 'react';

import { 
    ImageBackground, 
    StyleSheet,
    TouchableOpacity, 
    View, 
    Image, 
    Dimensions} 
    from 'react-native';

export function SignUpButton ({title, style, onPress}) {

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
        padding: 25,
        borderRadius: 8,
    },
    text: {
        color: 'black',
        fontSize: 14, 
        fontWeight: '500',

    }

})