import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article6 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/knowledge-center/images/about-life-insurance/Making_Financial_Portfolio_copy_big.jpg'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>8 Financial Tips for Young Adults </Text>

                {/* description  */}
                <Text style={styles.description}>In 2022, there are still knowledge gaps for young adults to learn how to manage money, apply for credit, and stay out of debt.
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Ana Staples </Text></Text>
                    <Text style={styles.date}> 4th Feb 2023 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> consumer.gov </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Article6;

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