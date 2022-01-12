import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import AudioListItem from "./AudioListItem";
import {audios} from "../data/DataAudios.jsx"

export default function AudioList(props) {
  const audios1 = audios.map((au) => {
    return ( <AudioListItem key={`Audio-${au.nombre}`} audio={au.audio} nombre={au.nombre} imagenes={au.imagenes} descripcion={au.descripcion}/>)
  })

  return (
    <ScrollView >
      {audios1}
    </ScrollView>
  );
}



