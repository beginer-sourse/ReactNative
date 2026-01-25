import react, {JSX} from "react";
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
  StyleSheet,
  Button
} from "react-native";

function AppPro(): JSX.Element {
  const mode = useColorScheme() === "light"; 
  return (
    <>
      <View style={styles.contanier}>
        <Text>Hello World</Text>
        <Text style={mode ? styles.darkmodeText : styles.lightmodeText}>This is Dark Mode Text</Text>
        <Button title="Press Me" onPress={() => console.log("Button Pressed")} />
      </View>

      <View style={styles.contanier}>
        <Text>Hello World</Text>
        <Text style={mode ? styles.darkmodeText : styles.lightmodeText}>This is Dark Mode Text</Text>
        <Button title="Press Me" onPress={() => console.log("Button Pressed")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contanier :{
    display :"flex",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

  darkmodeText :{
    color:"#000000",
    
  },

  lightmodeText :{
    color:"#FFFFFF"
  }
  
});

export default AppPro;