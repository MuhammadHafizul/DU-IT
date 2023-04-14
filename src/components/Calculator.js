import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView } from 'react-native'


class Calculator extends Component {
    state = {
        value: '',
        rate: '',
        year: '',
        itrc: '',
        itrcResult: '',
    }

    handleValue = (text) => {
        this.setState({ value: text })
    }
    handleRate = (text) => {
        this.setState({ rate: text })
    }
    handleYear = (text) => {
        this.setState({ year: text })
    }

    calculate = (value, rate, year) => {
        //calculation
        // var result = ((parseFloat(rate)*1)*(parseFloat(value))
        // *(parseFloat(year))/100);
        // result = result.toFixed(1);
        //display result

        var result = ((parseFloat(rate) / 100) * parseFloat(value)
            * parseFloat(year));
        result = result.toFixed(2);

        this.setState({ itrc: result })

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingBottom: 70, backgroundColor: '#fff', }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Interest Rate Calculator</Text>

                <Text style={styles.label}>Current Value</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="$"
                    autoCapitalize="none"
                    onChangeText={this.handleValue} />
                <Text style={styles.label}>Annual Interest Rate</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="%"
                    autoCapitalize="none"
                    onChangeText={this.handleRate} />
                <Text style={styles.label}>Duration (In Years)</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="eg. 1"
                    autoCapitalize="none"
                    onChangeText={this.handleYear} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.calculate(this.state.value, this.state.rate, this.state.year)
                    }>
                    <Text style={styles.submitButtonText}> Calculate </Text>
                </TouchableOpacity>
                <Text style={styles.resultlabel}>Annual Payment: </Text>
                <Text style={styles.output}>{this.state.itrc}</Text>
                <Text style={styles.resultText}>{this.state.itrcResult}</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Calculator

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        alignItems: 'center',

    },
    input: {
        width: '70%',
        margin: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30
    },
    submitButton: {
        backgroundColor: '#020148',
        padding: 10,
        marginTop: 30,
        height: 50,
        elevation: 5,
        width: '70%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    submitButtonText: {
        textAlign: "center",
        color: 'white',
        // fontWeight:"bold",
        fontSize: 18,
    },
    output: {
        textAlign: "center",
        fontSize: 40,
        fontWeight:"bold",
        marginTop: 10,
        color: '#020148'
    },
    title: {
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: '#020148'
    },
    resultText: {
        paddingTop: 20,
        paddingBottom: 10,
        marginTop: 50,
        textAlign: "center",
        fontSize: 25,
        color: 'red'
    },

    label: {
        fontSize: 20,
        marginLeft: 15,
        color: '#020148'
    },

    resultlabel: {
        fontSize: 25,
        marginLeft: 15,
        fontWeight: 'bold',
        color: '#020148',
        marginTop: 20
    }
})