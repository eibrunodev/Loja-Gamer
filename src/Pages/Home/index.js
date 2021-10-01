import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import Games from '../../Components/games/index.js'

export default function Home() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
      <Image 
          source={require('../../assets/Banner.png')}
          style={styles.image}
        />

       <View style={styles.textContainer}>
         <Text style={styles.text}>Jogos</Text>
         <Text style={[styles.text, {color:'#FCA311'}]}>-</Text>
         <Text style={[styles.text, {color:'#FCA311'}]}>Ação</Text>
         <TouchableOpacity style={{position: 'absolute', right:0, alignSelf:'center'}}>
            <MaterialIcons 
              name="filter-list"
              size={24}
              color="#000"
            />
         </TouchableOpacity>
       </View> 
      </View>
        <View style={styles.line} /> 

        <ScrollView>
          <Text style={styles.text}>Lançamentos</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Games img={require('../../assets/the-witcher-iii-wild-hunt.png')} cost='R$129,99' onClick={()=> navigation.navigate('Detail')}>
              the-witcher-iii-wild-hunt
            </Games>
            <Games img={require('../../assets/super-mario-odyssey.png')} cost='R$169,99' onClick={()=> navigation.navigate('Detail')}>
              super-mario-odyssey
            </Games>

          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Games img={require('../../assets/the-witcher-iii-wild-hunt.png')} cost='R$129,99' onClick={()=> alert("Clicou")}>
              the-witcher-iii-wild-hunt
            </Games>
            <Games img={require('../../assets/super-mario-odyssey.png')} cost='R$169,99' onClick={()=> alert("Clicou")}>
              super-mario-odyssey
            </Games>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Games img={require('../../assets/the-witcher-iii-wild-hunt.png')} cost='R$129,99' onClick={()=> alert("Clicou")}>
              the-witcher-iii-wild-hunt
            </Games>
            <Games img={require('../../assets/super-mario-odyssey.png')} cost='R$169,99' onClick={()=> alert("Clicou")}>
              super-mario-odyssey
            </Games>
          </View>

        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor:'#fff',
  }, 
  header: {
    marginBottom: 8
  },
  image: {
    width: "100%",
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical:'5%',
    marginHorizontal:'5%',
  },
  text: {
    fontFamily:'Roboto_700Bold',
    fontSize:26,
    marginHorizontal:'1%'
  },
  line: {
    borderBottomColor:'#E5E5E5',
    borderBottomWidth:2
  }

});