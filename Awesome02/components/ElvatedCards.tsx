import { 
  StyleSheet, Text, View, ScrollView , useColorScheme
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ElevatedCards() {
  const mode = useColorScheme() === "light";
  return (
    
      <ScrollView>
        <View style={styles.hardingContainer}>
          <Text style={[styles.Heading,mode ? styles.darkMode : styles.lightMode]}>Elevated Cards</Text>
        </View>
        {/* Flex only works on View tag not in Text Tag 
          justifyContent and alignItems work only on flex
          containers — meaning components that have children inside them.
        */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
              <View style={[styles.card,]}>
                  <Text >Red</Text>
              </View>
              <View style={[styles.card]}>
                  <Text >Blue</Text>
              </View>
              <View style={[styles.card, ]}>
                  <Text >Green</Text>
              </View>
              <View style={[styles.card,]}>
                  <Text >Purple</Text>
              </View>
              <View style={[styles.card,]}>
                  <Text >Yellow</Text>
              </View> 
          </View>
        </ScrollView>
      </ScrollView>
    
  )
}

const styles = StyleSheet.create({

   hardingContainer:{
    alignItems:"center",
    justifyContent:"center",

    // backgroundColor:"gray",
  },
  Heading:{
    fontSize:18,
    fontWeight:"bold",
    padding:8,
    backgroundColor:"gray",
    borderRadius:6,
  },
  darkMode:{
    color:"#000000"
  },
  lightMode:{
    color:"#FFFFFF"
  },

  // flatCard container style
  container:{
    marginTop:14,
    margin:10,
    flexDirection:"row",
    gap:15,
  },
  card:{
    height:100,
    width:100,
    backgroundColor:"grey",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
    elevation:4,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowOpacity:0.4,
    shadowRadius:10,
    shadowColor:"red",
  },
  cardOne:{backgroundColor:"red"},
  cardTwo:{backgroundColor:"blue"},
  cardThree:{backgroundColor:"green"},
  cardFour:{backgroundColor:"purple"},
  cardFive:{backgroundColor:"yellow"},


})