import React from "react";
import {View,Text,SafeAreaView,FlatList,StyleSheet, TextInput} from "react-native";



import NewCard from "./conponents/Card/NewCard"
import data from "./data.json";
function App(){
  const renderStore = ({item}) =><NewCard news={item}/>
  
  return(
    <SafeAreaView >
      <View>

      </View>
      <View style={style1.containers} >
        <View>
        </View>
        <FlatList
        ListHeaderComponent={()=>
          <View>
          <Text style={style1.title_container}>
            STORE
          </Text>
        
      </View>
        }
        
        data={data}
        renderItem={renderStore}
        />
      </View>
    </SafeAreaView>
  )
}

const style1 = StyleSheet.create({
  containers:{
    backgroundColor:"#fff5ee"
  },
  title_container:{
    textAlign:"center",
    fontSize:50,
    color:"green",
    fontWeight:"bold",
    fontStyle:"italic"
  }

})

export default App;