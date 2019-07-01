import React, {Component} from 'react'
import {View, StyleSheet, Dimensions, Image} from 'react-native'
import Logo from '../assets/img/logo.png'
import LoginForm from '../components/LoginForm';

const {width, height} = Dimensions.get('window')

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo}/>
                <LoginForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#34a5de',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        marginTop: height * .1,
        width: 235,
        height: 210
    }
})