import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type currencyType = PropsWithChildren<{ // defining type for props
    flag: string,
    countryName: string,
    currencyConverter: number,
    children?: React.ReactNode
}>

const CurrencyComp =(props:currencyType)=>{ // currency component
  return(
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.countryName}</Text>
    </View>
  )
}


export default CurrencyComp;

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})