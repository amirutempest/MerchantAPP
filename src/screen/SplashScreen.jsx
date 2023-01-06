import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const stylesSplash = StyleSheet.create({
    flexRoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 140
    },
    Text4: {
        textAlign: 'center',
        marginTop: 500
    }
});

function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreen')
        }, 3000);
    })
    return (
        <View>
            <View style={stylesSplash.flexRoot}>
                <Image source={require('../asset/image/merchant-logo.png')} />
            </View>
            <View>
                <Text style={stylesSplash.Text4}>Powered by Said Amirudin</Text>
            </View>
        </View>
    )
}

export default SplashScreen