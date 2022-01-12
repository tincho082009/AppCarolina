import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Modal, Pressable} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import { Icon} from "react-native-elements";

const images = [{
    url: '',
    props: {
        source: require('../../assets/FolletoLaCarolinaMapa.jpeg')
    }
}]

export default function Mapas() {
    const [modalVisible, setModalVisible] = useState(false);

      return (
        <View style={styles.container}>
            <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => { setModalVisible(false) } } >    
                <ImageViewer enableSwipeDown={true} onSwipeDown={()=> setModalVisible(false)} imageUrls={images}/>
                <View style={{elevation : 10,
                    position: "absolute",
                    width: "100%",
                    alignItems: "flex-end"}}>
                    <Pressable
                        style={{width: 40,
                            height: 40,
                            marginRight: 15,
                            marginTop: 15,
                            borderRadius: 20,
                            padding: 8,
                            backgroundColor: '#909497',}}
                        onPress={() => {
                            setModalVisible(false)
                        } }>
                        <Icon type="material-community" name="close"/>
                    </Pressable>
                </View>
            </Modal>
            <Text style={styles.titulo}>Presione el mapa para ampliar el mismo </Text>
            <Pressable onPress={()=>setModalVisible(!modalVisible)} style={styles.containerImage}>
                <Image
                style={styles.image}
                source={require('../../assets/FolletoLaCarolinaMapa.jpeg')}
                />
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: "20%"
    },
    containerImage:{
        marginTop: 20,
        alignItems:"center"
    },
    buttonClose: {
        borderRadius: 20,
        marginTop: 10,
        padding: 8,
        elevation: 8,
        backgroundColor: '#909497',
        alignSelf: "flex-end",
        top:20,
        right:8
    },
    image:{
        height: "90%",
        width: "90%"
    },
    titulo:{
        textAlign:"center",
        fontSize: 15
    }
})

