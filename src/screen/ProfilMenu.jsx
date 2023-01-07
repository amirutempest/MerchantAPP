import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const styles = StyleSheet.create({
    wrapNav: {
        height: 60,
        backgroundColor: '#EA4335',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtNav: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    wrapTop: {
        height: 300
    },
    wrapStatus: {
        backgroundColor: '#FCEA2B',
        width: 150,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        top: 5,
        left: 5
    },
    wrapImgHalaman: {
        top: -35,
        alignItems: 'center'
    },
    txtStatus: {
        fontWeight: '500'
    },
    imgHamalan: {
        height: 160,
        width: 411, 
    },
    imgProfil: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: -90, 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#EA4335'
    },
    wrapInput: {
        top: -90
    },
    inputForm: {
        borderBottomColor: '#EA4335',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        fontSize: 15,
        height: 40
    },
    touchBtn: {
        top: -40,
        width: 370,
        height: 45,
        alignItems: 'center',
        backgroundColor: '#60D669',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})

const ProfilMenu = () => {
    let statusAkun = 'Belum Terverivikasi';
    return (
        <View>
            <View style={styles.wrapNav}>
                <Text style={styles.txtNav}>Profil Merchant</Text>
            </View>

            <View style={styles.wrapTop}>
                <View style={styles.wrapStatus}>
                    <Text style={styles.txtStatus}>{statusAkun}</Text>
                </View>
                <View style={styles.wrapImgHalaman}>
                    <Image
                        style={styles.imgHamalan}
                        source={require('../asset/image/lokasi.png')} />
                </View>
                <View>
                    <Image
                        style={styles.imgProfil}
                        source={require('../asset/image/profil-img.jpg')} />
                </View>
            </View>

            <View style={styles.wrapInput}>
                <TextInput
                    style={styles.inputForm}
                    placeholder='Nama Merchant' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Kategori Merchant' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Pemilik Merchant' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='No Telephone' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='No Whatsapp' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Alamat Merchant' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Posisi Maps' />
                <TextInput
                    style={styles.inputForm}
                    placeholder='Deskripsi Merchant' />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.touchBtn}>
                    <Text style={styles.txtBtn}>Kirim Verifikasi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilMenu