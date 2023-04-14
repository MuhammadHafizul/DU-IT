import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';

const Article = () => {
    return (
        <SafeAreaView style={ styles.container }>
           {/* image  */}
           <Image source={{
                uri:'https://images.unsplash.com/photo-1633158829556-6ea20ad39b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1ZGdldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
            }}   
            //style={styles.image}
            style={{width: "100%", height:200, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            />

<View style={{padding: 10}}>
                {/* title  */}
                <Text style={styles.title}>Needs vs. Wants: How to Budget for Both </Text>

                {/* description  */}
                <Text style={styles.description}> 
                    Some things are a necessity — a roof over your head, electricity in your home, gas in your car to get to work — 
                    and some things you just want, like tickets to a show or dinner and a movie. 
                     You can fit both into your budget and still set money aside for emergencies if you manage your spending with care.
                    Keep reading to learn how to balance financial needs and wants.
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}> By: <Text style={styles.author}> Courtney Neidel  </Text></Text>
                    <Text style={styles.date}> 17th Dec 2019 </Text>
                </View>

                {/* SOURCE  */}
                <View style={{marginTop: 10}}> 
                    <Text> Source:
                        <Text style={styles.source}> www.nerdwallet </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>

        
    )
}
export default Article;

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