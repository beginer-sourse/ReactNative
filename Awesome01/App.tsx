import react from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button
} from "react-native";

function App(){
  return (
    <SafeAreaView>
      <View>
        <Text>i am learing to build my first app</Text>
        <Button title="Click this"  onPress={()=>console.log("This is Button")}/>
      </View>
    </SafeAreaView>
  );
}



export default App;