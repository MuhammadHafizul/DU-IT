import React from 'react';
import { View, ImageBackground, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TaibMain = () => {

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
                    imageStyle={{ opacity: 0.7 }}>
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
                <Text style={styles.bodytextheader} >Perbadanan Tabung Amanah Islam Brunei is a Body Corporate established in Brunei Darussalam under the Perbadanan Tabung Amanah Islam Brunei Act (Cap 163).
                    Perbadanan TAIB was officially launched by His Majesty Sultan Haji Hassanal Bolkiah Mu'izzaddin Waddaulah ibni Al-Marhum Sultan Haji Omar 'Ali Saifuddien Sa'adul Khairi Waddien, Sultan and Yang Di-Pertuan of Negara Brunei Darussalam, the Present Monarch who is also the Supreme Executive Authority of the Country on the 29th September 1991.
                    The launching of Perbadanan TAIB marked a new beginning for Brunei Darussalam as Perbadanan TAIB was the first Financial Institution that conducted all its activities in accordance with Islamic faith.</Text>
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
export default TaibMain;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#C59428'
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