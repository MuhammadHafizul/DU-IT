import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article3 = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* image  */}
            <Image source={{
                uri:'https://www.thebalancemoney.com/thmb/1JJ6i78r-ZT4eq0lE0AdjWD6t2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/investing-terms-you-should-know-356338_FINAL-5c5af82146e0fb0001be7b2c.png'
            }}      
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

            <View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>Tips for Smart Investing </Text>

                {/* description  */}
                <Text style={styles.description}>Research shows that on average, even investors with bad timing earned twice as much as people who held their savings in cash-like investments over a 20-year period. 
                And those who stick to their investment plan achieve a higher net worth than those who don't. 
                There isn't a magic formula—reaching your financial goals takes time, discipline and a good investing strategy. 
                Starting earlier rather than later allows you to benefit longer from compounding returns. 
                But data also show that staying the course and continuing to invest regardless of market conditions can lead to greater wealth accumulation. 
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>By:<Text style={styles.author}>Charles Schwab & Co. </Text></Text>
                    <Text style={styles.date}> 22nd Nov 2022 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> Charles Schwab </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Article3;

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