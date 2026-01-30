import { StyleSheet, Text, View , ImageSourcePropType ,Image, Pressable} from 'react-native'
import React, { JSX, PropsWithChildren, useState } from 'react'

// Importing dice images
import DiceOne from "../assets/One.png" 
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"



/*
  Defining a type for DiceImageType component props
  This type includes a single property 'ImageUrl' of type ImageSourcePropType
  which is used to specify the source of the image to be displayed.

  PropsWithChildren is a TypeScript type that:
    Adds children automatically to your component’s props type

    ImageUrl : ImageSourcePropType
      ImageSourcePropType is a type provided by React Native that represents
      the source of an image. It can be a local image (like the ones imported above)
      or a remote image (like a URL).
    
    ImageUrl will be used to pass the image source to the component that displays the dice image.

    ImageUrl and children are the props for the DiceImageType component. 
*/

type DiceImageType = PropsWithChildren<{
  ImageUrl : ImageSourcePropType, // Defining ImageUrl prop of type ImageSourcePropType
  children?: React.ReactNode
}>

const DiceImage =({ImageUrl}:DiceImageType):JSX.Element => { // Destructuring ImageUrl from props
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={ImageUrl}  /> 
      {/* Using ImageUrl as the source for the Image component  and ImageUrl is image source of type ImageSourcePropType not simple string or number.*/}
    </View>
  )
}



export default function App() {
  const color=()=>{
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
      color+=hexa[Math.floor(Math.random()*16)];
    }
    return color;
  }
  

  const diceImageFun = ()=>{
    const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    const randomIndex = Math.floor(Math.random() * diceImages.length); // Generate a random index between 0 and 5
    const randomIndex2 = Math.floor(Math.random() * diceImages.length);
    setDiceImage(diceImages[randomIndex]); // Update the state with the new dice image
    setDiceImage2(diceImages[randomIndex2]);
    
    setBackgroundColor(color());
    setSquareColor(color());
    setCircleColor(color());
  }

  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne); // this tell useState that diceImage will hold an image source of type ImageSourcePropType not simeple string or number.
  const [diceImage2,setDiceImage2] = useState<ImageSourcePropType>(DiceOne);
  const [BackGroundColor,setBackgroundColor] = useState('#FFFFFF');
  const [squareColor,setSquareColor] = useState('#FFFFFF');
  const [circleColor,setCircleColor] = useState('#FFFFFF');

  return (
    <View style={[styles.container, {backgroundColor:BackGroundColor}]}>
      <View style={[styles.square, {backgroundColor:squareColor}]}></View>
      <DiceImage ImageUrl={diceImage}/>
      <Pressable onPress={diceImageFun}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
      <DiceImage ImageUrl={diceImage2}/>
      <View style={[styles.Circle,{backgroundColor:circleColor}]}></View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  square:{
    width:100,
    height:100,
  },
  Circle:{
    width:100,
    height:100,
    borderRadius:50,
    marginTop:20,
  }
})