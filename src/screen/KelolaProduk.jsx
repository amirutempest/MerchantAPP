import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';


const KelolaProduk = () => {

    return (
        <ScrollView>
            <View>
                <Text>Form Pemabahan Produk</Text>
                <View>
                    <TextInput
                        placeholder='Masukan Nama Produk' />
                    <TextInput
                    placeholder='Dropdown'/>
                </View>
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
});