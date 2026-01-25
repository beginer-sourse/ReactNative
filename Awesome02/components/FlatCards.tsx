import { 
  StyleSheet, Text, View, ScrollView , useColorScheme
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function FlatCards() {
  const mode = useColorScheme() === "light";
  return (
      <>
      
        <View style={styles.hardingContainer}>
          <Text style={[styles.Heading,mode ? styles.darkMode : styles.lightMode]}>Flat Cards</Text>
        </View>
        {/* Flex only works on View tag not in Text Tag 
          justifyContent and alignItems work only on flex
          containers — meaning components that have children inside them.
        */}
        <ScrollView>
          <View style={styles.container}>
              <View style={[styles.card,styles.cardOne]}>
                  <Text >Red</Text>
              </View>
              <View style={[styles.card,styles.cardTwo]}>
                  <Text >Blue</Text>
              </View>
              <View style={[styles.card, styles.cardThree]}>
                  <Text >Green</Text>
              </View>
              <View style={[styles.card,styles.cardFour]}>
                  <Text >Purple</Text>
              </View>
              
          </View>
        </ScrollView>
      
      </>
  )
}

const styles = StyleSheet.create({
  
  // flatCard Heading style

  hardingContainer:{
    alignItems:"center",
    width:"100%",
    backgroundColor:"gray",
  },
  Heading:{
    fontSize:18,
    fontWeight:"bold",
    padding:5
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
    gap:10,

  },
  card:{
    display:"flex",
    flex:1,
    height:100,
    width:100,
    justifyContent:"center",
    alignItems:"center",
    
    borderRadius:8,
  },
  cardOne:{backgroundColor:"red"},
  cardTwo:{backgroundColor:"blue"},
  cardThree:{backgroundColor:"green"},
  cardFour:{backgroundColor:"purple"},



})