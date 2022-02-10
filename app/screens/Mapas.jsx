import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Modal, Pressable, ScrollView} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import { Icon} from "react-native-elements";

const images = [{
    url: '',
    props: {
        source: require('../../assets/FolletoLaCarolinaMapa.jpg')
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
            <View style={styles.viewRow}>
                <ScrollView contentContainerStyle={{alignItems: "center"}} >
                    <View style={styles.containerText}>
                        <Text style={styles.tituloHeader}>AUDIOGUIA</Text>
                        <View style={styles.imageContainer}>
                        <Image resizeMode="contain" style={styles.imageHeader} source={require('../../assets/LogoLaCarolina.jpg')}/>
                        </View>
                    </View>
                    <Text style={styles.titulo}>Presione el mapa para ampliar el mismo </Text>
                    <Pressable onPress={()=>setModalVisible(!modalVisible)} style={styles.containerImage}>
                        <Image
                        style={styles.image}
                        source={require('../../assets/FolletoLaCarolinaMapa.jpg')}
                        />
                    </Pressable>
                </ScrollView>
               
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange", 
        padding: "2%", 
        paddingTop:"11%",
        height: "100%",
    },
    viewRow:{
        borderWidth: 5, 
        borderColor:"#f4f0d4",
        height: "100%"
    },
    containerImage:{
        marginTop: 10,
        height: 510,
        width: "95%"
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
        flex:1, 
        width: undefined, 
        height: undefined
    },
    titulo:{
        marginTop:10,
        fontFamily: "LemonMilk",
        textAlign:"center",
        fontSize: 13
    },
    containerText:{
        marginTop:10,
        backgroundColor:"#5d6929",
        paddingBottom:10,
        paddingTop: 10,
        width:"95%",
        alignItems:"center"
      },
      tituloHeader:{
        fontFamily: 'LemonMilk',
        textAlign:"center",
        fontSize: 22,
        color: "#fe9901"
      },
      imageContainer:{
        width:"100%",
        height: 120
      },
      imageHeader:{
        flex:1, 
        width: undefined, 
        height: undefined
      }
})

