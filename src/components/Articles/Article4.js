import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article4 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVkZ2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>Making a Budget </Text>

                {/* description  */}
                <Text style={styles.description}>A budget is a plan you write down to decide how you will spend your money each month.
                A budget helps you make sure you will have enough money every month. Without a budget, you might run out of money before your next paycheck.
                A budget shows you: how much money you make and how you spend your money.
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Federal Trade Commissions </Text></Text>
                    <Text style={styles.date}> 2023 </Text>
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
export default Article4;

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