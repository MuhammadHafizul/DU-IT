import React, { useState, } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import WNBudget from '../components/WNBudget';
import Banks from '../components/Banks';
import Calculator from '../components/Calculator';
import News from '../components/News';
import PriceChecker from '../components/PriceChecker';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (

        <View style={styles.container}>

            {selectedTab == 0 ? (
                <Banks />
            ) : selectedTab == 1 ? (
                <Calculator />
            ) : selectedTab == 2 ? (
                <WNBudget />
            ) : selectedTab == 3 ? (
                <News />
            ) : (
                <PriceChecker />
            )}

            <View style={styles.bottomTabs}>

                <TouchableOpacity
                    style={styles.bottomTabButton}
                    onPress={() => {
                        setSelectedTab(0);
                    }}>
                    <Image
                        source={require('../images/banks.png')}
                        style={styles.bottomTabIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomTabButton}
                    onPress={() => {
                        setSelectedTab(1);
                    }}>
                    <Image
                        source={require('../images/calculator.png')}
                        style={styles.bottomTabIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomTabButton}
                    onPress={() => {
                        setSelectedTab(2);
                    }}>
                    <Image
                        source={require('../images/WNBudget.png')}
                        style={styles.bottomTabIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomTabButton}
                    onPress={() => {
                        setSelectedTab(3);
                    }}>
                    <Image
                        source={require('../images/news.png')}
                        style={styles.bottomTabIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomTabButton}
                    onPress={() => {
                        setSelectedTab(4);
                    }}>
                    <Image
                        source={require('../images/pricechecker.png')}
                        style={styles.bottomTabIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bottomTabs: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#020148',
        elevation: 5,
    },

    bottomTabButton: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomTabIcon: {
        width: 30,
        height: 30,
    },
});