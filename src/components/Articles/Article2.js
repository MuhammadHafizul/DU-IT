import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnZ3klMjBiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>5 smart budgeting tips for first-time savers </Text>

                {/* description  */}
                <Text style={styles.description}>Although it may seem daunting, working out how to budget your money doesn’t need to be hard. 
                With these practical budgeting tips, saving up for your short- and long-term goals can almost seem effortless. 
                And these tips aren’t just for those with a ton of disposable income. 
                If you’re wondering how to budget money on low income, we’ve got you covered with smart methods such as the 50/30/20 budget rule.
                The 50/30/20 being you needs (50), wants (30) and paying off debts (20) . 
                
                Read on to learn about five of our favorite tried-and-true budgeting tips. </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Fred C. Lunenburg </Text></Text>
                    <Text style={styles.date}> 23rd Nov 2022 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> expertprogrammanagement(Locke’s SMART method) Goal-Setting Theory of Motivation </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Article2;

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