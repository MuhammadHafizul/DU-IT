import React, { useState } from 'react';
import {View,Text,TouchableOpacity,TextInput,FlatList,SafeAreaView,StyleSheet,ScrollView} from 'react-native';

const WNBudget = () => {
  const [wants, setWants] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [selected, setSelected] = useState('wants');
  const [inputValue, setInputValue] = useState('');
  const handlePress = () => {
    selected === 'wants' ? setWants([...wants, inputValue]) : setNeeds([...needs, inputValue]);
    setInputValue('');
  };
  const toggleSelected = () => {
    setSelected(selected === 'wants' ? 'needs' : 'wants');
  };
  const renderItem = ({ item, index }) => (
    <View style={styles.submittedValue}>
      <Text style={styles.submittedValueText}>
        {index + 1}. {item}
      </Text>
    </View>
  );
  const wantsCount = wants.length;
  const needsCount = needs.length;
  const totalCount = wantsCount + needsCount;
  const headingText = selected === 'wants' ? 'Wants' : 'Needs';

  return (
    <ScrollView>
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>
        <Text style={styles.heading}>{headingText}</Text>
        <View style={styles.titleContainer}>
          {['wants', 'needs'].map((title) => (
            <TouchableOpacity
              key={title}
              style={[
                styles.titleButton,
                selected === title && styles.selectedTitle,
              ]}
              onPress={() => setSelected(title)}
            >
              <Text style={styles.titleButtonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSelected}>
          <Text style={styles.buttonText}>
            {selected === 'wants' ? 'Switch to Needs' : 'Switch to Wants'}
          </Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${selected} here`}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submittedValuesContainer}>
              <Text style={styles.submittedValuesTitle}>
                Submitted {selected.charAt(0).toUpperCase() + selected.slice(1)}
              </Text>
              <FlatList
                data={selected === 'wants' ? wants : needs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />
<View style={styles.container}>
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.countContainer}>
      <Text style={styles.countText}>
        {`You have ${wantsCount} wants and ${needsCount} needs, ${totalCount} in total.
        ${wantsCount} (${((wantsCount / totalCount) * 100).toFixed(2)}%) wants
        ${needsCount} (${((needsCount / totalCount) * 100).toFixed(2)}%) needs`}
      </Text>
    </View>
  </ScrollView>
</View>
          </View>
          </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex:1, paddingBottom: 70 },
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  titleContainer: { flexDirection: 'row', marginTop: 20, marginBottom: 5 },
  titleButton: { flex: 1, alignItems: 'center', paddingVertical: 10, backgroundColor: '#a6a6a6', borderRadius: 30, marginHorizontal: 10, marginVertical: 10 },
  selectedTitle: { backgroundColor: '#020148' },
  titleButtonText: { color: '#eeeeee', fontWeight: 'bold', fontSize: 18, padding: 5, borderRadius: 30 },
  toggleButton: { marginVertical: 20, backgroundColor: '#020148', padding: 15, borderRadius: 30 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', borderRadius: 30 },
  inputContainer:{width:'100%'},
  input: { backgroundColor: '#f0f0f0', paddingHorizontal: 10, borderRadius: 5, marginBottom: 10 },
  submitButton: { backgroundColor: '#020148', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 30, alignSelf: 'center', marginTop: 20 },
  submittedValuesTitle:{flex:1, textAlign: 'center', padding: 10},
  submittedValue: {flex:1, marginTop: 20, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#eee', borderRadius: 5 },
  submittedValuesContainer: {flex:1, fontSize: 16, fontWeight: 'bold' },
 countContainer: {borderWidth: 1,paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#eee',borderRadius: 5,alignItems: 'center',textAlign: 'center', marginVertical: 10},
  countText: { fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
  heading: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', padding: 50},
  scrollViewContent: {flexGrow: 1,alignItems: 'center',justifyContent: 'center'},
});

export default WNBudget;