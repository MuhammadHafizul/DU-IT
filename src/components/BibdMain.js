import React from 'react';
import { View, ImageBackground, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const BibdMain = () => {

    const navigation = useNavigation();


    const [items, setItems] = React.useState([
        {
            name: "Accounts",
            img: require('../images/bibdAccount.jpg'),
        },

        {
            name: "Financing",
            img: require('../images/bibdFinancing.jpg'),
        },

        {
            name: "Cards",
            img: require('../images/bibdCard.jpg'),
        },

        {
            name: "Digital Banking",
            img: require('../images/bibdDigital.jpg'),
        },

        {
            name: "Bank Services",
            img: require('../images/bankServices.jpg'),
        },

        {
            name: "Securities",
            img: require('../images/bibdSecurity.jpg'),
        },
    ]);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
                <ImageBackground 
                source={item.img} 
                style={styles.image}
                imageStyle={{opacity:0.7}}>
                    <View style={[styles.itemContainer]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingVertical: 50 }}
                showsVerticalScrollIndicator={false} >
                <Text style={styles.bodytextheader} >BIBD, Brunei’s largest bank and flagship Islamic financial institution, was formed in 2005 through the merger of Islamic Bank of Brunei and Islamic Development Bank of Brunei. It is an internationally recognised financial institution governed by global best practices under the guidance of an experienced management team. BIBD is committed to meeting the needs of our customers from all walks of life through continuous service, product and technology innovations.</Text>
                <Text style={styles.bodytext} >Below are personal banking options you can choose from to find out more about them in detail. </Text>

                <FlatList
                    itemDimension={50}
                    data={items}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        width: '85%',
                        marginTop: 30,
                        marginHorizontal: 30,
                    }}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    renderItem={renderItem}
                />

            </ScrollView>
        </View>
    )
}
export default BibdMain;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#8A1863'
    },

    image: {
        width: '100%',
        resizeMode: 'contain',
    },

    bibdimage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },

    bodytextheader: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        textAlign: 'justify',
    },

    bodytext: {
        color: '#fff',
        marginTop: 20,
        marginHorizontal: '7%'
    },

    itemName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.7, height: 0.7 }, textShadowRadius: 1,
    },
});