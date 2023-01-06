import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'

const style = StyleSheet.create({
    Flex: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    FlexIcon: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#EA4335',
        height: 60,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    icoAdd: {
        width: 28,
        height: 28,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    icoLock: {
        width: 28,
        height: 38,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 318,
        height: 60,
        borderColor: '#EA4335',
        alignSelf: 'center',
        marginVertical: 2.33,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 18
    },
    logo: {
        alignSelf: 'center',
        marginTop: 120
    },
    WrapperRegister: {
        alignItems: 'center',
        marginTop: 30,
    },
    TxtRegis: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#EA4335',
    },
    TxtRegis2: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#EB3D2F'
    },
    WrapperInput: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    viewButton: {
        width: 370,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#EA4335',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    textLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    TxtBtm: {
        textAlign: 'center',
        marginTop: 20,
        color: '#1E1E1E'
    },
    google: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        alignSelf: 'center',
        marginTop: 30
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
    },
    forgot: {
        fontSize: 13,
        color: '#000',
    },
})

const Login = ({navigation}) => {
    return (
        <View>
            <View style={style.WrapperJudul}>
                <Image
                    source={require('../asset/image/merchant-logo.png')}
                    style={style.logo}
                />
            </View>

            <View style={style.WrapperRegister}>
                <Text style={style.TxtRegis}>Selamat Datang</Text>
                <Text style={style.TxtRegis2}>Masuk ke akun anda</Text>
            </View>

            <View style={style.WrapperInput}>

                <View style={style.Flex}>
                    <View style={style.FlexIcon}>
                        <Image
                            source={require('../asset/icon/add.png')}
                            style={style.icoAdd} />
                    </View>

                    <TextInput
                        placeholder="Email"
                        returnKeyType="next"
                        style={style.textInput}
                        // onChangeText={(text) => setEmail({ value: text, error: '' })}
                        // error={!!email.error}
                        // errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                </View>
                <View style={style.Flex}>
                    <View style={style.FlexIcon}>
                        <Image
                            source={require('../asset/icon/lock.png')}
                            style={style.icoLock} />
                    </View>
                    <TextInput
                        placeholder="Password"
                        returnKeyType="done"
                        style={style.textInput}
                        // value={password.value}
                        onChangeText={(text) => setPassword({ value: text, error: '' })}
                        // error={!!password.error}
                        // errorText={password.error}
                        secureTextEntry
                    />
                </View>

                <View style={style.forgotPassword}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('ResetPasswordScreen')}
                    >
                        <Text style={style.forgot}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity
                // loading={loading}
                // onPress={onLoginPressed}
                onPress={() => navigation.navigate('ProdukMenu')}
                >
                <View style={style.viewButton}>
                    <Text style={style.textLogin}>Masuk</Text>
                </View>
            </TouchableOpacity>

            <Text style={style.TxtBtm}>Masuk Dengan</Text>

            <TouchableOpacity>
                <Image
                    style={style.google}
                    source={require('../asset/icon/google.png')} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: '500' }}>Belum Memiliki Akun?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={{ color: "#EA4335", fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>

            {/* <Toast message={error} onDismiss={() => setError('')} /> */}
        </View>
    )
}

export default Login