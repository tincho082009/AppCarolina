import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Modal, Pressable, ScrollView} from "react-native";
import { Icon, Text } from "react-native-elements";
import AudioList from "../components/AudioList";
import { Audio } from 'expo-av';


export default function Home(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const scrollViewRef = useRef(null);
  const [sound, setSound] = useState();
  var timer;
  

  useEffect(async () => {
   const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audios/00intro.mp3')
   );
   setSound(sound);

   await sound.playAsync();
  
   /*return () => {
     clearInterval(timer);
   }*/
  }, []);

  const closeModal = () => {
    sound.unloadAsync();   
    setModalVisible(!modalVisible)
    //clearInterval(timer);
  }

  const moveModal = () => {
    var x = 0;
    var y = 0;

    timer = setInterval(() => {
      x += 4;
      y += 4;
      scrollViewRef.current.scrollTo({ x: x, y: y, animated: true })
    }, 85);

    setTimeout(() => {
      clearInterval(timer)
      }, 60000);
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
          /*onLayout={(contentWidth, contentHeight)=>{   
            moveModal()
          }}*/
        >
          <View style={styles.modalText}>
            <Text adjustsFontSizeToFit style={[styles.text, {textAlign: 'left', fontSize: 45}]}>Hola!</Text>
            <Text /><Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30}]}>desde la,</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:40, color:"#fe9901"}]}>Municipalidad</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:38, color:"#666f2d"}]}>de la Carolina</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30}]}>les damos la</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:42, color:"#fe9901"}]}>bienvenida</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30}]}>e invitamos a este</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:40, color:"#666f2d"}]}> recorrido</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:42, color:"#fe9901"}]}>paisajístico,</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:40}]}>histórico</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:45, color:"#666f2d"}]}>y cultural. </Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:28}]}>Vamos a conocer qué</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:35, color:"#fe9901"}]}>actividades</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:40, color:"#666f2d"}]}>podés realizar</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:39}]}>en la zona</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:41, color:"#fe9901"}]}>su flora</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:35, color:"#666f2d"}]}>y fauna,</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30}]}>accidentes geográficos,</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:38, color:"#fe9901"}]}>su historia</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:28, color:"#666f2d"}]}>y muchas otras cosas más.</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:36}]}>Esta app, </Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30}]}>será nuestro asistente;</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:33, color:"#fe9901"}]}>lo único que </Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:28, color:"#666f2d"}]}>tenés que hacer</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:34}]}>es reproducir</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:39, color:"#fe9901"}]}>el audio</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:25, color:"#666f2d"}]}>que se corresponde con la</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:38}]}>señalización vial</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:28, color:"#fe9901"}]}>y apretando el ícono de</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:42, color:"#666f2d"}]}>“detalles” o mapa</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:30, color:"#666f2d"}]}>recorrer las imágenes</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:37}]}>y los textos</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:28, color:"#fe9901"}]}>que acompañan los audios.</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:38, color:"#666f2d"}]}>Debido a la afluencia</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:25}]}>considerablemente mayor</Text>
            <Text/>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:34, color:"#fe9901"}]}>de visitantes desde</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:39, color:"#666f2d"}]}>San Luis a La Carolina</Text>
            <Text/>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:25}]}>las referencias se han </Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:33, color: "#fe9901" }]}>establecido en ese sentido,</Text>
            <Text/>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:36, color:"#666f2d"}]}>en caso de venir</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:32}]}>del lado contrario tales</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:37, color: "#fe9901"}]}>referencias deberán invertirse</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:31, color:"#666f2d"}]}>Esperamos que esta audioguia</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:40}]}>les sea de interés</Text>
            <Text />
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:35, color:"#fe9901"}]}>y ayude a</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:34, color:"#666f2d"}]}>enriquecer la</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:35}]}>experiencia</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:38, color:"#fe9901"}]}>de este</Text>
            <Text adjustsFontSizeToFit style={[styles.text, {fontSize:42, color:"#666f2d"}]}>viaje.</Text>          
          </View>
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
    <View style={{backgroundColor:"orange", height: "100%", padding: "2%", paddingTop:"11%"}}>
      <View style={styles.viewRow}>
        <AudioList></AudioList>
      </View>
    </View>
    </>
    
  );
  
}

const styles = StyleSheet.create({
  viewRow: {
    borderWidth: 5, 
    borderColor:"#f4f0d4",
    height: "100%"
  },
  centeredView: {
    backgroundColor:"#fe9901",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  modalView: {
    flex: 1,
    backgroundColor: '#f4f0d4',
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
    padding: 25
  },
  text:{
    fontFamily: 'LemonMilk',
    color:"black",
    textAlign: 'center',
  }
});
