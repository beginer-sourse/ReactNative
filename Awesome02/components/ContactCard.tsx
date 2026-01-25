import { StyleSheet, Text, View , Image ,useColorScheme} from 'react-native'
import React from 'react'

export default function ContactCard() {
  const mode = useColorScheme() === "light";
  const contanctCardData = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "phone": "555-0199",
    "description": "Software Engineer focusing on front-end development.",
    "imageUrl": "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "phone": "555-0187",
    "description": "Project Manager with experience in agile methodologies.",
    "imageUrl": "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "phone": "555-0145",
    "description": "UX Designer specializing in mobile application interfaces.",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "phone": "555-0123",
    "description": "Project Manager with experience in agile methodologies.",
    "imageUrl": "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
  }
];


  return (
    <>
      <View style={styles.Headingcontainer}>
        <Text style={[styles.heading,mode ? styles.darkMode : styles.lightMode]}>ContactCard</Text>
      </View>
      <View> 
        {/* map is used to iterate for every element  and why did we used () not {} beacuse when {} is used it need return keyword. it is like this {return()} but we didn't need return keyword for this () */}
        {contanctCardData.map(({id,name, phone, description,imageUrl})=>(
          <View key={id} style={styles.cardContanier}>
            <Image source={{uri:imageUrl}} style={styles.cardImage}/>
            <View style={styles.cardDetails}>
              <Text style={[styles.nameHeading, mode ? styles.darkMode : styles.lightMode]}>{name}</Text>
              <Text style={[styles.NumberStyle,mode ? styles.darkMode : styles.lightMode]}>{phone}</Text>
              <Text style={[styles.desStyle,mode ? styles.darkMode : styles.lightMode]}>{description}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Headingcontainer:{
    alignItems:"center",
    marginBottom:10,
  },
  heading:{
    color:"white",
    alignItems:"center",
    fontSize:18,
    fontWeight:"bold",
    backgroundColor:"gray",
    padding:6,
    borderRadius:6,
  },
   darkMode:{
    color:"#000000"
  },
  lightMode:{
    color:"#fff"
  },
  cardImage:{
    height:70,
    width:"18%",
    borderRadius:100/2, 
    overflow:"hidden",

  },
  cardContanier:{
    flexDirection:"row",
    gap:7,
    margin:5,
    borderRadius:12,
    backgroundColor:"#FF8FB7",
    padding:10,
    
  },
  cardDetails:{
    width:"80%",
  },
  nameHeading:{
    fontSize:16,
    fontWeight:"bold",
    color:"#FFF"
  },
  NumberStyle:{
    textAlign:"right",
    paddingRight:12,
  },
  desStyle:{
    fontSize:12,
  } ,


})