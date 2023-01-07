import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const CardKategori = () => {
    return (
        <View style={styles.wrapCard}>
            <Image
                style={styles.imgKategori}
                source={require('../asset/image/lokasi.png')} />
            <View style={styles.flexCard}>
                <Text style={styles.txtKategoriName}>Nama Kategori</Text>
                <View style={styles.wrapCrud}>
                    <TouchableOpacity
                        style={styles.wrapEdit}>
                        <Image source={require('../asset/icon/edit-ico.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.wrapDelete}>
                        <Image source={require('../asset/icon/delete-ico.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const KelolaKategori = () => {
    return (
        <ScrollView>
            <View style={styles.wrapForm}>
                <Text style={styles.txtForm}>Form Penambahan Kategori</Text>
                <TextInput
                    style={styles.formKategori}
                    placeholder='Masukan Nama Kategori'
                />
                <Text style={styles.txtKeterangan}>Tambahkan Gambar / Icon Kategori</Text>
                <TouchableOpacity
                    style={styles.formImage}>
                    <Image source={require('../asset/icon/upload-ico.png')} />
                    <Text style={styles.txtUpload}>Unggah Gambar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tambahBtm}>
                    <Text style={styles.txtTambah}>Tambah</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.judulKategori}>Daftar Kategori</Text>
            </View>

            <View>
                <CardKategori />
                <CardKategori />
                <CardKategori />
                <CardKategori />
            </View>
        </ScrollView>
    )
}

export default KelolaKategori

const styles = StyleSheet.create({
    wrapForm: { 
        margin: 20 
    },
    txtForm: { 
        fontSize: 16, 
        fontWeight: '600', 
        color: '#000' 
    },
    formKategori: { 
        borderBottomWidth: 1, 
        fontSize: 15, 
        borderColor: '#EA4335',
        marginTop: 10
    },
    txtKeterangan: {
        textAlign: 'center',
        marginTop: 20, 
        fontSize: 15,
        color: '#D0D0D0',
        marginBottom: 5
    },
    formImage: {
        backgroundColor: '#D0D0D0',
        alignItems: 'center',
        height: 120,
        justifyContent: 'center',
        borderRadius: 15
    },
    txtUpload: {
        color: '#9B9B9A',
        fontWeight: '600'
    },
    tambahBtm: {
        marginTop: 20,
        width: 370,
        height: 45,
        alignItems: 'center',
        backgroundColor: '#EA4335',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    txtTambah: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    judulKategori: {
        marginHorizontal: 20, 
        color: '#000',
        fontSize: 16, 
        fontWeight: '600'
    },

    wrapCard: {
        flexDirection: 'row', 
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#D0D0D0',
        height: 100,
        borderRadius: 10
    },
    imgKategori: {
        height: 80,
        width: 80
    },
    flexCard: { 
        marginLeft: 10,
    },
    txtKategoriName: {
        color: '#000',
        fontSize: 15
    },
    wrapCrud: {
        flexDirection: 'row',
        top: 30,
        left: 170
    },
    wrapEdit: {
        backgroundColor: '#FBBC04',
        height: 30,
        width: 40, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapDelete: {
        backgroundColor: '#EA4335',
        height: 30,
        width: 40, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
})