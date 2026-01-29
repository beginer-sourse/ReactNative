import { StyleSheet, Text, View  ,StatusBar,TextInput,ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


// constants
import { currencyByRupee } from './constant';
// components
import CurrencyComp from './components/currencyButton';

import snackbar from 'react-native-snackbar';




export default function App() {

  const [inputvalue, setInputvalue] = useState(""); // state for input value
  const [resultValue, setResultValue] = useState(""); // state for result value
  const [targetCurrency, setTargetCurrency] =  useState(""); // state for target currency

  const buttonPressed = (targetCurrency: Currency) => {
    if(!inputvalue){ // checking if input value is empty
      return snackbar.show({
        text: "Please enter a value",
        backgroundColor: "#EA7773",
        textColor: "#FFFFFF",
      });
    }
    const inputAmount = parseFloat(inputvalue) 
    if(!isNaN(inputAmount)){ // isNaN = is Not a Number // first convert it and then check if result is a number. if is a number then isNaN will return false. 
      const convertedValue = inputAmount * targetCurrency.value;
      setResultValue(`${targetCurrency.symbol} ${convertedValue.toFixed(2)}`); // toFixed(2) = to fixed 2 decimal places
      setTargetCurrency(targetCurrency.name);
    } else {
      snackbar.show({
        text: "Please enter a valid number",
        backgroundColor: "#EA7773",
        textColor: "#FFFFFF",
      });
    }
  }

  return (
    <SafeAreaView  >
      <StatusBar />
      <ScrollView keyboardShouldPersistTaps='handled' >
      <View style={styles.container} >
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput 
              maxLength={12}
              value={inputvalue}
              onChangeText={setInputvalue}
              clearButtonMode='always' 
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
            />
          </View>
          {resultValue && (
            <Text>{resultValue}</Text>
          )}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
