import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native'

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
        marginVertical: 25
    },
    TxtRegis: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#EA4335',
    },
    TxtRegis2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#EB3D2F'
    },
    WrapperInput: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15,
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
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignSelf: 'center',
        marginTop: 20
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})

const Register = ({navigation}) => {
    return (
        <View>
            <View style={style.WrapperRegister}>
                <Text style={style.TxtRegis}>Selamat Datang</Text>
                <Text style={style.TxtRegis2}>Silahkan Buat Akun Anda</Text>
            </View>

            <View style={style.WrapperInput}>

                <View style={style.Flex}>
                    <View style={style.FlexIcon}>
                        <Image
                            source={require('../asset/icon/profil-ico.png')}
                            style={style.icoAdd} />
                    </View>

                    <TextInput
                        placeholder="Nama"
                        style={style.textInput}
                        returnKeyType="next"
                        // value={name.value}
                        // onChangeText={(text) => setName({ value: text, error: '' })}
                        // error={!!name.error}
                        // errorText={name.error}
                    />
                </View>

                <View style={style.Flex}>
                    <View style={style.FlexIcon}>
                        <Image
                            source={require('../asset/icon/add.png')}
                            style={style.icoAdd} />
                    </View>

                    <TextInput
                        placeholder="Email"
                        style={style.textInput}
                        returnKeyType="next"
                        // value={email.value}
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
                        style={style.textInput}
                        returnKeyType="done"
                        // value={password.value}
                        // onChangeText={(text) => setPassword({ value: text, error: '' })}
                        // error={!!password.error}
                        // errorText={password.error}
                        secureTextEntry
                    />
                </View>

            </View>

            <TouchableOpacity
                // loading={loading}
                mode="contained"
                // onPress={onSignUpPressed}
            >
                <View style={style.viewButton}
                >
                    <Text style={style.textLogin}>Daftar</Text>
                </View>
            </TouchableOpacity>

            <Text style={style.TxtBtm}>Daftar Dengan</Text>

            <TouchableOpacity>
                <Image
                    style={style.google}
                    source={require('../asset/icon/google.png')} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: '500' }}>Sudah Memiliki Akun?</Text>
                <TouchableOpacity
                    onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={{ color: "#EA4335", fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Masuk</Text>
                </TouchableOpacity>
            </View>

            {/* <Toast message={error} onDismiss={() => setError('')} /> */}
        </View>
    )
}

export default Register