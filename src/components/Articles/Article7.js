import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article7 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'data:image/png;base64,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'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>Financial Literacy: What It Is, and Why It Is So Important </Text>

                {/* description  */}
                <Text style={styles.description}>Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing. When you are financially literate, you have the foundation of a relationship with money, and it is a lifelong journey of learning. The earlier you start, the better off you will be, because education is the key to success when it comes to money.
                </Text>

                <Text style={styles.description}>Why Financial Literacy Matters?
                From day-to-day expenses to long-term budget forecasting, financial literacy is crucial for managing these factors. It is important to plan and save enough to provide adequate income in retirement while avoiding high levels of debt that might result in bankruptcy, defaults, and foreclosures.

                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Jason Fernando </Text></Text>
                    <Text style={styles.date}> 30th March 2023 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> investopedia </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Article7;

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