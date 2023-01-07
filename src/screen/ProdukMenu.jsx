import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    wrapCard: {
        marginBottom: 10,
    },
    txtCard: {
        color: '#EA4335',
        fontSize: 17,
        fontWeight: '700',
    },
    touchImage: {
        marginTop: 10,
        width: 390,
        height: 120,
        borderRadius: 10
    }
})

const ProdukMenu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapCard}>
                <Text style={styles.txtCard}>Kelola Kategori</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('KelolaKategori')}
                >
                    <Image 
                    style={styles.touchImage}
                    source={require('../asset/image/lokasi.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapCard}>
                <Text style={styles.txtCard}>Kelola Produk</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('KelolaProduk')}>
                    <Image 
                    style={styles.touchImage}
                    source={require('../asset/image/lokasi.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapCard}>
                <Text style={styles.txtCard}>Katalog Produk</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('KatalogProduk')}>
                    <Image 
                    style={styles.touchImage}
                    source={require('../asset/image/lokasi.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProdukMenu