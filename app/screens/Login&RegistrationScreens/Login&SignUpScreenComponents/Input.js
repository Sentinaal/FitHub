import React from 'react';

import { 
    ImageBackground, 
    StyleSheet,
    TextInput, 
    View, 
    Image, 
    Dimensions} 
    from 'react-native';

export function Input ({style, ...props}) {

    return (
     
    <TextInput {...props} style={[styles.input, style]} />
    );
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#CCCCCC',
        width: '100%',
        padding: 20, 
        borderRadius: 8, 

    },

});