import React, { useEffect, useState, useCallback, useRef } from "react";
import { StyleSheet, View,  Image, Modal, Pressable, ScrollView} from "react-native";
import { Icon, Button, Text } from "react-native-elements";
import AudioList from "../components/AudioList";
import { Audio } from 'expo-av';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Home(props) {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(true);
  const scrollViewRef = useRef(null);
  const [sound, setSound] = useState();
  var timer;

  useEffect(async () => {
   const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audios/Intro.mp3')
   );
   setSound(sound);

   await sound.playAsync();
  
   return () => {
     clearInterval(timer);
   }
  }, []);

  const closeModal = () => {
    sound.unloadAsync();   
    setModalVisible(!modalVisible)
    clearInterval(timer);
  }

  const moveModal = () => {
    var x = 1;
    var y = 1;
    timer = setInterval(() => {
      x += 1;
      y += 1;
      scrollViewRef.current.scrollTo({ x: x, y: y, animated: true })
      
    }, 20);

    setTimeout(() => {
      clearInterval(timer)
      }, 46000);
  }

  return (
    <>
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {closeModal()}}>
      <View style={styles.centeredView}>
        <ScrollView style={styles.modalView} fadingEdgeLength={150} contentContainerStyle={{alignItems: 'center'}} ref={scrollViewRef}
          onContentSizeChange={(contentWidth, contentHeight)=>{   
            moveModal()
          }}
        >
          <Text style={styles.modalText}>
            Hola, desde la Municipalidad de la Carolina les damos la bienvenida e invitamos a este recorrido paisajístico, histórico y cultural. 
            Vamos a conocer qué actividades podés realizar en la zona, su flora y fauna,  accidentes geográficos, su historia y muchas otras cosas más.
            Esta app, será nuestro asistente;  lo único que tenés que hacer es reproducir el audio que se corresponde con la señalización vial y apretando el ícono de “detalles” recorrer las imágenes y los textos que acompañan los audios. 
            Esperamos que les sea de interés y ayude a enriquecer la experiencia de este viaje.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.containerButton}>
        <Pressable
            style={styles.buttonClose}
            onPress={() => {
              closeModal()
            } }>
            <Icon type="material-community" name="close"/>
        </Pressable>
      </View>
    </Modal>
    <View style={{backgroundColor:"#E59866", height: "100%", paddingTop: "10%"}}>
      <View style={styles.viewRow}>
        <Text style={styles.titulo}>LA CAROLINA</Text>
        <AudioList></AudioList>
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  viewRow: {
    height: "100%"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  modalView: {
    flex: 1,
    backgroundColor: '#424949',
    borderRadius: 20,
    width:"95%",
    height:"95%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  containerButton: {
    elevation : 10,
    position: "absolute",
    width: "100%",
    alignItems: "flex-end"
  },  
  buttonClose: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#909497',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 35,
    padding: 35
  },
  titulo:{
    textAlign:"center",
    fontSize: 20
  }
});
