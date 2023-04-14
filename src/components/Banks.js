import React, {} from 'react';
import { TouchableOpacity, View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatGrid } from "react-native-super-grid";

const Banks = () => {

    const navigation = useNavigation();

    const [items, setItems] = React.useState([
        {
            name: "BIBD",
            img: require('../images/bibd.png'),
            navigateTo: 'BibdMain'
        },

        {
            name: "Baiduri",
            img: require('../images/baiduri.png'),
            navigateTo: 'BaiduriMain'
        },

        {
            name: "TAIB",
            img: require('../images/taib.png'),
            navigateTo: 'TaibMain'
        },

        {
            name: "Maybank",
            img: require('../images/maybank.png'),
            navigateTo: 'MaybankMain'
        },

        {
            name: "RHB",
            img: require('../images/rhb.png'),
        },

        {
            name: "Standard Chartered",
            img: require('../images/standard.png'),
        },

        {
            name: "Bank of China",
            img: require('../images/bankofchina.png'),
        },

        {
            name: "UOB",
            img: require('../images/uob.png'),
        },
    ]);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
                <ImageBackground source={item.img} style={styles.image}>
                    <View style={[styles.itemContainer]}>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 70, backgroundColor: '#fff', }}>
            <FlatGrid
                itemDimension={207}
                data={items}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                spacing={0}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}


export default Banks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },

    itemName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
    },

});