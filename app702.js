import React from 'react'//class react-js
import { View,Text,Image,StyleSheet,Button } from 'react-native'//class react-native

export default class App extends React.Component{
  /*state*/
  state={
      headline:'Hello Boss!',
      count:1,
    }
  updateState=()=>{
    this.setState({
      headline:'Hey! Boss',
      count:2,
    })
  }
  updateState2=()=>{
    this.setState({
      headline:'Hello! Boss',
      count:2,
    })
  }
  /*parent*/
  render(){
    return(
      <View style={styles.container}>
        <Image 
        style={{width:1080,height:450}}
        source={{uri:'https://i.pinimg.com/originals/89/eb/dd/89ebdd648a56f1fa6bd98988c6c17781.jpg'}}
        />
        <Text style={styles.t1}>Hey! Siri</Text>
        <Text style={styles.t1}>{this.state.headline}</Text>
        <Button 
          onPress={"onpressLearning"}
          title="What can I help you with ?"
          color="#808080"
        />
        <Button 
          onPress={this.updateState}
          title="update"
          color="#808080"
        />
        <Button 
          onPress={this.updateState2}
          title="return"
          color="#808080"
        />
      </View>
    )  
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#DDA0DD',
  },
  t1:{
    fontSize:35,
    fontWeight:'normal',
    color:'#800080',
    justifyContent:'center',
    padding:20,
    margin:10,
  }
})