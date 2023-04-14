import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const PriceChecker = () => {

    const [topic, setTopic] = useState('');
    const [topics, setTopics] = useState([]);

    const addTopicHandler = () => {
        setTopics(currentTopics => [
            { id: Math.random().toString(), value: topic, comments: [] },
            ...currentTopics
        ]);
        setTopic('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.forumContainer}>
                <TextInput
                    placeholder="Enter a topic"
                    style={styles.textInput}
                    value={topic}
                    onChangeText={setTopic}
                />
                <TouchableOpacity
                    style={styles.buttonTopic}
                    onPress={addTopicHandler}>
                    <Text style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        color: '#fff',
                    }}>Add Topic</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forumContainer}>
                <Text style={styles.sortLabel}>Sort By: </Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        color: '#fff',
                    }}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 15,
                        color: '#fff',
                    }}>Date</Text>
                </TouchableOpacity><TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 15,
                        color: '#fff',
                    }}>Comments</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.topicContainerStatic}>
                <Text style={styles.topicTitle}>Milo 1KG</Text>
                <Text style={styles.topicComments}>5 comments</Text>
                <Text style={styles.topicComments}>Price: $15.30 </Text>
                <Text style={styles.topicComments}>Shop: Syarikat Hayati </Text>
                <Text style={styles.topicComments}>Location: Lambak Kiri </Text>
            </View>
            <View style={styles.topicContainerStatic}>
                <Text style={styles.topicTitle}> Pampers</Text>
                <Text style={styles.topicComments}>13 comments</Text>
                <Text style={styles.topicComments}>Price: $25.30 </Text>
                <Text style={styles.topicComments}>Shop: Huaho </Text>
                <Text style={styles.topicComments}>Location: Manggis </Text>
            </View>
            <View style={styles.topicContainerStatic}>
                <Text style={styles.topicTitle}> Esbok 100L</Text>
                <Text style={styles.topicComments}>27 comments</Text>
                <Text style={styles.topicComments}>Price: $460 </Text>
                <Text style={styles.topicComments}>Shop: Aman Power Store </Text>
                <Text style={styles.topicComments}>Location: Aman Hills </Text>
            </View>
            <View style={styles.topicContainerStatic}>
                <Text style={styles.topicTitle}> Samsung S23</Text>
                <Text style={styles.topicComments}>3 comments</Text>
                <Text style={styles.topicComments}>Price: $1460 </Text>
                <Text style={styles.topicComments}>Shop: Incomm </Text>
                <Text style={styles.topicComments}>Location: Kiulap </Text>
            </View>
            <FlatList
                data={topics}
                renderItem={({ item }) => (
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitle}>{item.value}</Text>
                        <Text style={styles.topicComments}>{item.comments.length} comments</Text>
                        <Text style={styles.topicComments}>Price: </Text>
                        <Text style={styles.topicComments}>Shop:  </Text>
                        <Text style={styles.topicComments}>Location: </Text>
                        <TouchableOpacity style={styles.buttonPost}>
                            <Text style={{
                                alignSelf: 'center',
                                fontSize: 15,
                                color: '#fff',
                            }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPost}>
                            <Text style={{
                                alignSelf: 'center',
                                fontSize: 15,
                                color: '#fff',
                            }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
                keyExtractor={item => item.id}
            />
        </View >
    );
};
export default PriceChecker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    forumContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 10,
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#020148',
        padding: 10,
        flex: 1,
        marginRight: 10
    },

    sortLabel: {
        fontWeight: 'bold'
    },

    topicContainerStatic: {
        width: '93%',
        borderWidth: 1,
        borderColor: '#020148',
        padding: 10,
        marginVertical: 5
    },

    topicContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#020148',
        padding: 10,
        marginVertical: 10
    },

    topicTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    topicComments: {
        color: 'gray'
    },

    buttonContainer: {
        flexGrow: 1,
        height: 30,
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: '#020148',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },

    buttonPost: {
        width: 100,
        height: 30,
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#020148',
        justifyContent: 'center',
    },

    buttonTopic: {
        width: 100,
        height: 30,
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: '#020148',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    }
});