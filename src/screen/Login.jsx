import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View>
            <Text>Ini Halaman Login</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('ProdukMenu')}
            >
                <Text>Masuk</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login