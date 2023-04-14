import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Article from './Articles/Article';
import Article2 from './Articles/Article2';
import Article3 from './Articles/Article3';
import Article4 from './Articles/Article4';
import Article5 from './Articles/Article5';
import Article6 from './Articles/Article6';
import Article7 from './Articles/Article7';

const News = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 70, backgroundColor: '#fff', }}>
            <ScrollView style={styles.container}>
                <Article />
                <Article2 />
                <Article3 />
                <Article4 />
                <Article5 />
                <Article6 />
                <Article7 />
            </ScrollView>
        </SafeAreaView>
    )
}
export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});