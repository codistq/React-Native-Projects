import { StyleSheet, Dimensions,Image } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"grey",

    },
    product_container:{
        fontSize:15,
        fontStyle:"italic",
        color:"black",
        borderRadius:15

    },
    product_area:{
        margin:15,
        backgroundColor:"#c0c0c0",
        

    },
    image_container:{
        height:Dimensions.get("window").height/2,
        width:Dimensions.get("window").width,
        borderRadius:10
        
         
    },
    price_container:{
        backgroundColor:"#c0c0c0",
        alignItems:"center",
        color:"black",
        margin:10,
        padding:5,
        borderRadius:15,
        
        

    },
    price_text:{
        fontWeight:"bold",
        fontSize:18,
        fontStyle:"italic",
        color:"green",
        textAlign:"center"
        
    },
    all:{
        backgroundColor:"#fff5ee",
        borderRadius:10,
        

    },
    title_text:{
        fontSize:25,
        color:"#000000",
        textAlign:"center",
    }


})