import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image, 
    Dimensions} 
    from 'react-native';

export function LoginScreen() {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Welcome to the Login Screen</Heading>
            <Input 
             style={styles.input} 
             placeholder={'Email'} 
             keyboardType={'email-address'} 
            />
             
            <Input 
            style={styles.input} 
            placeholder={'Password'} 
            secureTextEntry 
            />

            <LoginButton
            title={'Login'}
            style={styles.loginButton}
            onPress={() => {}}
            />

            <SignUpButton
            title={'Sign Up'}
            onPress={() => {}}
            />

        </View>
    );
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center',
        padding: 20,
        paddingTop: 100,
    },

    title: {
        marginBottom: 36,
    },

    input: {
        marginVertical: 10, 
    },

    loginButton: {
        marginVertical: 32,
    },
})

export default LoginScreen;