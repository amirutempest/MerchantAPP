import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    wrapNav: {
        height: 60,
        backgroundColor: '#EA4335',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    txtNav: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    wrapScroll: {
        padding: 15,
    },
    cardOrder: {
        padding: 10,
        paddingLeft: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginBottom: 30,
        borderWidth: 1
    },
    txtName: {
        fontWeight: '900',
        fontSize: 16,
        color: '#000'
    },
    txtCode: {
        color: '#000'
    },
    txtDate: {
        color: '#000'
    },
    wrapProgres: {
        position: 'absolute',
        backgroundColor: '#FCEA2B',
        width: 140,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        top: 60,
        left: 242,
        elevation: 3
    },
    txtProgres: {
        color: '#000'
    }
})

const DetailPesananRender = () => {
    return (
        <TouchableOpacity>
            <Image source={require('../asset/icon/history-ico.png')} />
        </TouchableOpacity>
    )
}

const CardOrder = () => {
    let kodeTransaksi = 'ABC123';
    let tanggalTransaksi = '12 - 12 - 2022';
    let txtProgres = 'Belum Diproses';
    return (
        <TouchableOpacity style={styles.cardOrder}>
            <Text style={styles.txtName}>Nama Produk Yang Di Order</Text>
            <Text style={styles.txtCode}>Kode Transaksi : {kodeTransaksi}</Text>
            <Text style={styles.txtDate}>Tanggal : {tanggalTransaksi}</Text>
            <View style={styles.wrapProgres}>
                <Text style={styles.txtProgres}>{txtProgres}</Text>
            </View>
        </TouchableOpacity>
    )
}

const PesananMenu = () => {

    return (
        <View>
            <View style={styles.wrapNav}>
                <Text style={styles.txtNav}>Daftar Pesanan</Text>
                <DetailPesananRender style={styles.navigation} />
            </View>

            {/* Card Order Area */}
            <ScrollView style={styles.wrapScroll}>
                <CardOrder />
                <CardOrder />
                <CardOrder />
            </ScrollView>

        </View>
    )
}

export default PesananMenu