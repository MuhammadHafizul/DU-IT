import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import CustomTextInput from '../common/CustomTextInput';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../images/Splash_bg.png')} style={styles.image}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../images/Logo_white_01.png')} style={styles.logo} />

                    <Text style={styles.title}>Make an Account</Text>

                    <CustomTextInput
                        placeholder={'First Name'}
                    />

                    <CustomTextInput
                        placeholder={'Last Name'}
                    />

                    <CustomTextInput
                        placeholder={'Email'}
                        type={'email'}
                    />

                    <CustomTextInput
                        placeholder={'Password'}
                        type={'password'}
                    />

                    <CustomTextInput
                        placeholder={'Confirm Password'}
                        type={'password'}
                    />

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => {
                        navigation.navigate('Home');
                    }}>
                        <Text style={{ alignSelf: 'center', fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>

                    <Text style={styles.link} onPress={() => {
                        navigation.navigate('Login');
                    }}>
                        Already have an account? Login here!
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default SignUp;

styles = StyleSheet.create({

    image: {
        width: '100%',
        height: '100%',
    },

    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 40,
        fontWeight: 900,
        color: '#fff',
        marginTop: 20,
        marginBottom: 20,
    },

    buttonLogin: {
        backgroundColor: '#fff',
        marginTop: 50,
        width: '70%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },

    placeholder: {
        color: '#fff',
    },

    link: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'light',
        textDecorationLine: 'underline',
        marginTop: 50,
        marginBottom: 20,
    }
})