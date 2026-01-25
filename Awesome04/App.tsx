import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'


export default function App() {
  const [backGroundColor,setBackGroundColor]=useState('#ffffff');

  const genrateColor=()=>{
    let color="#";
    const letters='0123456789ABCDEF'; // hexadecimal letters
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random()*16)];
    }
    setBackGroundColor(color);
  }

  return (
    <>
    <StatusBar barStyle='light-content'/>
      <View style={[styles.container, {backgroundColor:backGroundColor}]}>
        <TouchableOpacity style={styles.button} onPress={genrateColor}>
          <Text style={styles.buttonTxt}>Press Me</Text>
        </TouchableOpacity>
        
      </View>
      
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    justifyContent:"center",
    alignItems:"center",
    
  },
  button:{
    backgroundColor:"gray",
    padding:12,
    borderRadius:8,
  },
  buttonTxt:{
    color:"white",
    fontSize:22,
    fontWeight:"bold",
  }
})