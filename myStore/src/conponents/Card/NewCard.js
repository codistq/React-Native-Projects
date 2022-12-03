import React from "react";
import {View,Text,Image} from "react-native";
import styles from "./NewCard.style";



const NewCard = ({news}) =>{
    return(
    <View style={styles.all}>
        <View >
          <Image
        style={styles.image_container}
        source={{uri:news.imgURL}}
      />
        </View>
        <View style={styles.product_area}>
        <Text  style={styles.title_text} >
            {news.title}
          </Text>
          <Text style={styles.price_text}>{news.price}</Text>
        </View>
    </View>
    )
}

export default NewCard;
