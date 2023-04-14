import React, { } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../images/Splash_bg.png')} style={styles.image}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    <Image source={require('../images/Logo_white_01.png')} style={styles.logo} />

                    <Text style={styles.title} >DUIT</Text>

                    <Text style={styles.tagline} >Anyone can du-it!</Text>
                    
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => {
                        navigation.navigate('Login'); }}>
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSignUp} onPress={() => {
                        navigation.navigate('SignUp'); }}>
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}
export default Splash;

styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%',
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 90,
        fontWeight: 900,
        color: '#fff',
        marginTop: 20,
    },

    tagline: {
        fontSize: 30,
        fontWeight: 200,
        color: '#fff',
        marginBottom: 20,
    },

    buttonLogin: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '70%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },

    buttonSignUp: {
        background: 'transparent',
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 20,
        width: '70%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    }
})