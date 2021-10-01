import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

export default function Games(props){

  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }

    return `${desc.substring(0, 23)}...`;
  }

  return(
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.gamesImg}
      />
      <Text style={styles.gameText}>
       {filterDesc(props.children)} 
      </Text>
      <View opacity={0.4}>
        <Text style={styles.gameText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: '2%',
    alignItems:'center',
    justifyContent:'center',

  },
  gamesImg:{
    width: 175,
    height: 175,
  },
  gameText:{
    fontSize:13,
    marginLeft:'10%'
  }
})