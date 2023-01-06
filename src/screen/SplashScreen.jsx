import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ProdukMenu')
        }, 3000);
    })
    return (
        <View>
            <Text>Ini SplashScreen</Text>
        </View>
    )
}

export default SplashScreen