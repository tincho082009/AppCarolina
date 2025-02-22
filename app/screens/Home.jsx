import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AudioList from "../components/AudioList";
import { Audio } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(props) {
  const [modalVisible, setModalVisible] = useState(true);
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audios/00intro.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  const closeModal = () => {
    if (sound) {
      sound.unloadAsync();
      setModalVisible(!modalVisible);
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <SafeAreaView style={styles.centeredView} edges={["top"]}>
          <ScrollView
            style={styles.modalView}
            fadingEdgeLength={150}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={styles.modalText}>
              <Text style={[styles.text, { textAlign: "left", fontSize: 45 }]}>
                Hola!
              </Text>
              <Text />
              <Text />
              <Text style={[styles.text, { fontSize: 30 }]}>desde la,</Text>
              <Text style={[styles.text, { fontSize: 30, color: "#fe9901" }]}>
                Municipalidad
              </Text>
              <Text style={[styles.text, { fontSize: 38, color: "#666f2d" }]}>
                de la Carolina
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 30 }]}>les damos la</Text>
              <Text style={[styles.text, { fontSize: 39, color: "#fe9901" }]}>
                bienvenida
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 30 }]}>
                e invitamos a este
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 40, color: "#666f2d" }]}>
                {" "}
                recorrido
              </Text>
              <Text style={[styles.text, { fontSize: 30, color: "#fe9901" }]}>
                paisajístico,
              </Text>
              <Text style={[styles.text, { fontSize: 40 }]}>histórico</Text>
              <Text style={[styles.text, { fontSize: 38, color: "#666f2d" }]}>
                y cultural.{" "}
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 25 }]}>
                Vamos a conocer qué
              </Text>
              <Text style={[styles.text, { fontSize: 35, color: "#fe9901" }]}>
                actividades
              </Text>
              <Text style={[styles.text, { fontSize: 28, color: "#666f2d" }]}>
                podés realizar
              </Text>
              <Text style={[styles.text, { fontSize: 39 }]}>en la zona</Text>
              <Text />
              <Text style={[styles.text, { fontSize: 41, color: "#fe9901" }]}>
                su flora
              </Text>
              <Text style={[styles.text, { fontSize: 35, color: "#666f2d" }]}>
                y fauna,
              </Text>
              <Text style={[styles.text, { fontSize: 30 }]}>
                accidentes geográficos,
              </Text>
              <Text style={[styles.text, { fontSize: 38, color: "#fe9901" }]}>
                su historia
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 28, color: "#666f2d" }]}>
                y muchas otras cosas más.
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 36 }]}>Esta app, </Text>
              <Text style={[styles.text, { fontSize: 30 }]}>
                será nuestro asistente;
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 33, color: "#fe9901" }]}>
                lo único que{" "}
              </Text>
              <Text style={[styles.text, { fontSize: 28, color: "#666f2d" }]}>
                tenés que hacer
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 34 }]}>es reproducir</Text>
              <Text style={[styles.text, { fontSize: 39, color: "#fe9901" }]}>
                el audio
              </Text>
              <Text style={[styles.text, { fontSize: 25, color: "#666f2d" }]}>
                que se corresponde con la
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 32 }]}>
                señalización vial
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 28, color: "#fe9901" }]}>
                y apretando el ícono de
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 38, color: "#666f2d" }]}>
                “detalles” o mapa
              </Text>
              <Text style={[styles.text, { fontSize: 30, color: "#666f2d" }]}>
                recorrer las imágenes
              </Text>
              <Text style={[styles.text, { fontSize: 37 }]}>y los textos</Text>
              <Text style={[styles.text, { fontSize: 28, color: "#fe9901" }]}>
                que acompañan los audios.
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 35, color: "#666f2d" }]}>
                Debido a la afluencia
              </Text>
              <Text style={[styles.text, { fontSize: 22 }]}>
                considerablemente mayor
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 34, color: "#fe9901" }]}>
                de visitantes desde
              </Text>
              <Text style={[styles.text, { fontSize: 39, color: "#666f2d" }]}>
                San Luis a La Carolina
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 25 }]}>
                las referencias se han{" "}
              </Text>
              <Text style={[styles.text, { fontSize: 30, color: "#fe9901" }]}>
                establecido en ese sentido,
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 36, color: "#666f2d" }]}>
                en caso de venir
              </Text>
              <Text style={[styles.text, { fontSize: 32 }]}>
                del lado contrario tales
              </Text>
              <Text style={[styles.text, { fontSize: 37, color: "#fe9901" }]}>
                referencias deberán invertirse
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 31, color: "#666f2d" }]}>
                Esperamos que esta audioguia
              </Text>
              <Text style={[styles.text, { fontSize: 40 }]}>
                les sea de interés
              </Text>
              <Text />
              <Text style={[styles.text, { fontSize: 35, color: "#fe9901" }]}>
                y ayude a
              </Text>
              <Text style={[styles.text, { fontSize: 34, color: "#666f2d" }]}>
                enriquecer la
              </Text>
              <Text style={[styles.text, { fontSize: 35 }]}>experiencia</Text>
              <Text style={[styles.text, { fontSize: 38, color: "#fe9901" }]}>
                de este
              </Text>
              <Text style={[styles.text, { fontSize: 42, color: "#666f2d" }]}>
                viaje.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.containerButton}>
          <Pressable
            style={styles.buttonClose}
            onPress={() => {
              closeModal();
            }}
          >
            <Icon name="close" size={25} />
          </Pressable>
        </View>
      </Modal>
      {modalVisible ? (
        <></>
      ) : (
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            padding: "2%",
            paddingTop: "11%",
          }}
        >
          <View style={styles.viewRow}>
            <AudioList></AudioList>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewRow: {
    borderWidth: 5,
    borderColor: "#f4f0d4",
    height: "100%",
  },
  centeredView: {
    backgroundColor: "#fe9901",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  modalView: {
    backgroundColor: "#f4f0d4",
    borderRadius: 20,
  },
  containerButton: {
    elevation: 10,
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
  },
  buttonClose: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 20,
    padding: 8,
    backgroundColor: "#909497",
  },
  modalText: {
    padding: 25,
  },
  text: {
    fontFamily: "LemonMilk",
    color: "black",
    textAlign: "center",
  },
});
