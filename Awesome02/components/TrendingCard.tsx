import { StyleSheet, Text, View,useColorScheme,Image , ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrendingCard() {
  const mode = useColorScheme() === "light";
  return (
    <>
      
      <View style={styles.Heading}>
      <Text style={mode ? styles.darkMode : styles.lightMode}>TrendingCard</Text>

      </View>
      <View style={styles.container}>
        <View style={[styles.card]}>
            
              <Image source={{uri:"https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg?semt=ais_hybrid&w=740&q=80"}}
              style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.title}>Nature</Text>
                <Text style={styles.label}>Trending Card Example</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt id distinctio molestias illo error beatae impedit architecto qui deserunt doloremque, ipsam omnis doloribus, vel saepe voluptatibus vero corrupti.</Text>
              </View>
        </View>

        <View style={[styles.card]}>
            
              <Image source={{uri:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"}}
              style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.title}>Nature</Text>
                <Text style={styles.label}>Trending Card Example</Text>
                <Text style={styles.description}>There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web design</Text>
              </View>
          </View>

      </View>
    </> 

  )
}

const styles = StyleSheet.create({
  // flatCard Heading style
  Heading:{
    backgroundColor:"gray",
    marginTop: 6,
    height:25,
    alignItems:"center",  // horizontally align
    borderRadius:6,
    

  },
 darkMode:{
    color:"#000000"
  },
  lightMode:{
      color:"#FFFFFF"
  },
  container:{
    alignItems:"center", // horizontally align
    padding:10
  },
  card:{
    margin:8,
    height:350,
    width:"100%",
    backgroundColor:"#fff",
    borderRadius:12,    
    overflow:"hidden",
    elevation:4,
    
  },
  cardImage:{
    height:"50%",
    resizeMode:"cover",
  
  },
  cardContent:{
    padding:8,
    height:"50%",
  
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:2
  },
  label:{
    fontSize:17,
    // fontWeight:"bold",
    marginBottom:4,
    textAlign:"right",
    
  },
  description:{
    padding:4,
    marginBottom:3
  },

});