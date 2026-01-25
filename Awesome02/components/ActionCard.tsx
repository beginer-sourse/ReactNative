import { StyleSheet, Text, View , useColorScheme, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'

export default function ActionCard() {
  const mode = useColorScheme() === "light";
  const openWebsite =(url:string)=>{
    Linking.openURL(url);
  }
  return (
    <>
      <View style={styles.Heading}>
        <Text style={[mode ? styles.darkMode : styles.lightMode ,styles.HeadingText]}>Blog Card</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.cardHeading}>Lorem ipsum dolor sit</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri:"https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4="}}/>
        </View>
        <View style={styles.BodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut totam beatae consectetur pariatur, accusantium commodi nulla, deserunt odit corrupti facilis culpa sapiente? Possimus tempora dolor tempore debitis eaque exercitationem quam!</Text>
          <View style={styles.linkContainer}>
            
            <View>
              <TouchableOpacity onPress={()=>openWebsite("https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16")}>
                <Text style={styles.linkText}>Read More</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=>openWebsite("https://www.youtube.com/@codewithharry")}>
                <Text style={styles.linkText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Heading:{
    alignItems:"center",  // horizontally align
    fontSize:22,

  },
  HeadingText:{
    fontSize:18,  
    fontWeight:"bold",
    padding:6
  },
  darkMode:{
    color:"#000000"
  },
  lightMode:{
    color:"#fff"
  },
  cardContainer:{
    backgroundColor:"brown",
    borderRadius:20,
    height:360,
    margin:8,
    
  },
  headerContainer:{
    alignItems:"center",
  },
  cardHeading:{
    fontSize:22,
    fontWeight:"bold",
    padding:6
  },
  imageContainer:{
    height:"50%",
    overflow:"hidden",
  },
  imageStyle:{
  height:"100%",
  width:"100%",
  },
  BodyContainer:{
    padding:10,
  },
  bodyText:{
    fontSize:14,
    fontWeight:"normal",
    marginBottom:6,
    marginHorizontal:4,
  },
  linkContainer:{
    flexDirection:"row",
    marginTop:10,
    justifyContent:"space-evenly",
  },
  linkText:{
    backgroundColor:"gray",
    padding:6,
    paddingHorizontal:10,
    borderRadius:12,
    fontSize:14,
    fontWeight:"bold",
    
  }
});