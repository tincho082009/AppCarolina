import React from "react";
import {StyleSheet, Text, View, Image, ScrollView} from "react-native";
import AudioListItem from "./AudioListItem";
import {audios} from "../data/DataAudios.jsx"

export default function AudioList(props) {
  const colors = ["#f4f0d4", "#d8b041", "#573d00"];
  var count = -1;

  const audios1 = audios.map((au) => {
    count === 2 ? count = 0 : count++

    return ( <AudioListItem key={`Audio-${au.nombre}`} colorStyle={colors[count]}  audio={au}/>)
  })

  return (
    <ScrollView contentContainerStyle={{alignItems: "center"}} >
      <View style={styles.containerText}>
        <Text style={styles.titulo}>AUDIOGUIA</Text>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={require('../../assets/LogoLaCarolina.jpg')}/>
        </View>
      </View>
      {audios1}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerText:{
    marginTop:10,
    backgroundColor:"#5d6929",
    paddingBottom:10,
    paddingTop: 10,
    width:"95%",
    alignItems:"center"
  },
  titulo:{
    fontFamily: 'LemonMilk',
    textAlign:"center",
    fontSize: 22,
    color: "#fe9901"
  },
  imageContainer:{
    width:"100%",
    height: 120
  },
  image:{
    flex:1, 
    width: undefined, 
    height: undefined
  }
});


