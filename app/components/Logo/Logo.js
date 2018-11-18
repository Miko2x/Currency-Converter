import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground 
            resizeMode='contain' 
            style={styles.containerImage} 
            source={require('../Images/bgLogo.png')}>
            <Image resizeMode='contain' style={styles.image} source={require('../Images/Logo.png')}/>
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
    </View>
);

export default Logo;