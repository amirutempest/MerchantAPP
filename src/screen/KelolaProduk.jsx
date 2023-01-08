import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import DropDownPicker from 'react-native-dropdown-picker';

const CardProduk = () => {
    let priceProduk = 50000;
    let stokJumlah = 99;
    return (
        <View style={styles.wrapCard}>
            <Image
                style={styles.imgKategori}
                source={require('../asset/image/lokasi.png')} />
            <View style={styles.flexCard}>
                <Text style={styles.txtKategoriName}>Nama Kategori</Text>
                <Text style={styles.kategori}>Kategori</Text>
                <Text style={styles.hargaProduk}>Rp {priceProduk}</Text>

                <View style={styles.flexStok}>
                    <Text style={styles.txtJ}>Stok :</Text>
                    <Text style={styles.txtR}>{stokJumlah}</Text>
                </View>
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

const KelolaProduk = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    let resultJumlah = 9
    return (
        <ScrollView>
            <View>
                <Text style={styles.txtForm}>Form Pemabahan Produk</Text>
                <View style={styles.wrapForm}>
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Masukan Nama Produk' />
                    {/* <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    /> */}
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Pilih Kategori' />
                    <View style={styles.wrapUnggah}>
                        <Text style={styles.txtUnggah}>Tambahkan Gambar / Icon Produk</Text>
                        <TouchableOpacity style={styles.touchUnggah}>
                            <Image source={require('../asset/icon/upload-ico.png')} />
                            <Text style={styles.txtTouch}>Unggah Gambar</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.formKategori}
                        placeholder='Masukan Seri Produk / Nomor Seri'
                    />
                    <TextInput
                        style={styles.formKategori}
                        placeholder='masukan Deskripsi Produk'
                    />
                    <View
                        style={styles.formHarga}>
                        <TextInput

                            placeholder='Buat Harga Produk'
                        />
                        <Image style={styles.icoHarga} source={require('../asset/icon/money.png')} />
                    </View>
                    <View style={styles.flexJumlah}>
                        <Text style={styles.txtJumlah}>Jumlah Stok Produk</Text>
                        <View style={styles.flexTouch}>
                            <TouchableOpacity
                                style={styles.min}>
                                <Image source={require('../asset/icon/plus.png')} />
                            </TouchableOpacity>
                            <Text style={styles.jumlah}>{resultJumlah}</Text>
                            <TouchableOpacity
                                style={styles.plus}>
                                <Image source={require('../asset/icon/minus.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.tambahBtm}>
                        <Text style={styles.txtTambah}>Tambah</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.txtDaftarProduk}>Daftar Yang Sudah Ditambahkan</Text>
                {/* card produk */}
                <CardProduk />
                <CardProduk />
                <CardProduk />
            </View>
        </ScrollView>
    )
}

export default KelolaProduk

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    formKategori: {
        borderBottomWidth: 1,
        fontSize: 15,
        borderColor: '#EA4335',
        marginTop: 10
    },
    wrapForm: {
        marginHorizontal: 10
    },
    txtForm: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginTop: 15,
        marginLeft: 10
    },
    txtUnggah: {
        marginVertical: 10,
        color: 'grey'
    },
    touchUnggah: {
        height: 140,
        backgroundColor: '#D0D0D0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTouch: {
        color: 'grey',
        fontWeight: '500'
    },
    formHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        fontSize: 15,
        borderColor: '#EA4335',
        marginTop: 10
    },
    icoHarga: {
        top: 10
    },
    flexJumlah: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    flexTouch: {
        flexDirection: 'row',
    },
    jumlah: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold'
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
    txtDaftarProduk: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    // Card Produk
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
        top: 50,
        left: 170,
        position: 'absolute'
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
    },
    flexStok: {
        flexDirection: 'row'
    },
    hargaProduk: {
        color: '#EA4335'
    },
    kategori: {
        color: 'grey'
    },
    txtJ: {
        color: 'grey'
    },
    txtR: {
        fontWeight: 'bold',
        color: '#000'
    }
});