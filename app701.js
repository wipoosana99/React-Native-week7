import React from 'react'//class react-js
import { View,Text,Image,StyleSheet } from 'react-native'//class react-native

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.t1}>
        YVES SAINT LAURENT
      </Text>
      <Text style={styles.t2}>
        BLACK OPIUM
      </Text>
      <Image 
        style={{width:411,height:209}}
        source={{uri:'https://cf.shopee.co.th/file/21aa69df34aaedcbf1c9a0bd1a2ce0e5'}}
      />
      <Image 
        style={{width:411,height:209}}
        source={require('./assets/download.jpg')}
      />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'#B22222',
    flex:1,
  },
  t1:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    backgroundColor:'FloralWhite',
    padding:10,
    margin:10,
  },
  t2:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    backgroundColor:'FloralWhite',
    padding:20,
    margin:10,
  },
})