import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article5 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'https://www.investopedia.com/thmb/d2yCWqydWXCs5AGYi1a3KhKQE9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1050228750-78b205c15493434ca0fda93a37b0d095.jpg'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>These are 5 scams to watch out for in 2023, according to a consumer protection expert </Text>

                {/* description  */}
                <Text style={styles.description}>As financial technology protections become more sophisticated, so are fraudsters’ methods to scam you out of your money.
                    Scams can wreck their victims’ finances, credit scores, and emotions. 
                    Maybe the scariest part of scams is how common they are. For instance, in 2022 Americans reportedly lost almost $40 billion dollars to phone scams alone. 
                    If you don’t want to fall victim to a scam, it’s wise to learn what to watch out for in 2023.
                    CNBC Select sat down with Micheal Bruemmer, VP of Experian Data Breach Resolution and Consumer Protection, to talk about the scams that will likely be most prevalent this year — and how you can protect yourself against them.
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Ana Staples </Text></Text>
                    <Text style={styles.date}> 4th Feb 2023 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> CNBC </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Article5;

const styles = StyleSheet.create({
    container:{
        flex: 1,

        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.7,
        shadowColor: "#000",
        shadowOffset:
        {
            height: 5,
            width: 5
        },
        elevation: 3,
        backgroundColor: "#FFF",
        marginTop: 55,
        padding: 15
    },

    title:{
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10
    },

    description:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10
    },

    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },

    heading:{

    },

    author:{
        fontWeight: "bold",
        fontSize: 15
    },

    date:{
        fontWeight: "bold",
        fontSize: 15,
        color: '#E63946'
    },

    source:{
        color: '#E63946',
        fontWeight: "bold",
        fontSize: 18
    }
});