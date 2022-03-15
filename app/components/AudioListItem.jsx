import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, Modal, Pressable, StyleSheet} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import ImageViewer from 'react-native-image-zoom-viewer';
import Player from "./Player";

export default function AudioSlider(props){
    const {audio, colorStyle} = props;
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("");
    const [textCpy, setTextCpy] = useState("");
    const [nombreImagen, setNombreImagen] = useState("");
    const [currentFont, setCurrentFont] = useState(18);

    const makeVisible = (type) => {
        setType(type)
        setVisible(true);
    }

    const changeViewer = (index) => {
        setNombreImagen(audio.infoImagenes[index].nombreFoto)
        setTextCpy(audio.infoImagenes[index].fotografo)
    }

    useEffect(() => {
        setNombreImagen(audio.infoImagenes[0].nombreFoto)
        setTextCpy(audio.infoImagenes[0].fotografo)
    }, [visible])

    return (
        <>
        <Modal visible={visible} transparent={false} animationType="slide" onRequestClose={() => { setVisible(false)}} >                    
            {
                type == "images" ?
                    <>
                        <ImageViewer onChange={(index) => changeViewer(index)} enableSwipeDown={true} onSwipeDown={()=> setVisible(false)} imageUrls={audio.imagenes}/>
                        <View style={{position:"absolute",alignSelf:"center", bottom: 50}}>
                            <Text style={{color:"white", fontFamily:"LemonMilk",  fontSize:22, textAlign:"center", paddingBottom: 20}}>{nombreImagen}</Text>
                            <Text style={{color:"white", fontFamily:"LemonMilk", fontSize:6, textAlign:"center"}}>{textCpy}</Text>
                        </View>
                    </>
                    :
                    <View style={styles.centeredView}>
                        <ScrollView style={styles.modalBody} 
                        contentContainerStyle={{alignItems: 'center'}}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textTitle}>
                                    {audio.nombre}
                                </Text>
                                <Text style={styles.textBody}>
                                    {audio.descripcion}
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
            }
            <View style={styles.closeContainer}>
                <Pressable style={styles.closeButton} onPress={() => setVisible(false)}>
                    <Icon type="material-community" name="close"/>
                </Pressable>
            </View>
        </Modal>
        <View style={[styles.mainContainer, {backgroundColor: colorStyle}]}>
            <View style={colorStyle === "#f4f0d4" ? {borderWidth: 5, borderColor:"#666f2d", flexDirection:"row", padding: 5} : {borderWidth: 5, borderColor:"#f4f0d4", flexDirection:"row", padding: 5}}>
                <View style={{justifyContent:"center"}} >
                    <Icon size={35} style={{backgroundColor:"#fe9901", borderRadius: 20, padding: 2}} type="material-community" color={colorStyle == "#f4f0d4" ? "#666f2d" : colorStyle == "#d8b041"? "#573d00": "#f4f0d4"} name="volume-high" />
                </View>
                <View style={{flexDirection: "column", justifyContent:"center", width: "78%"}}>
                    <Text adjustsFontSizeToFit style={[styles.headerText, colorStyle == "#d8b041" ? {color: "#f4f0d4"} : {color: "#fe9901"}, {fontSize: currentFont}]}
                    onTextLayout={ (e) => {
                        const { lines } = e.nativeEvent;
                        if (lines.length > 1) {
                          setCurrentFont(currentFont - 1);
                        }
                      } 
                    }>
                        {audio.nombre}
                    </Text>
                    <Player track={audio.audio} />
                </View>
                <View style={{flexDirection: "column", justifyContent:"center"}}>
                    <Pressable onPress={() => makeVisible("text")} style={{paddingBottom: 10}}>
                        <Icon name="text-search" type="material-community" color="#666f2d" ></Icon>
                    </Pressable>
                    <Pressable onPress={() => makeVisible("images")}>
                        <Icon  name="image" type="material-community" color="#fe9901" ></Icon>
                    </Pressable>
                </View>
            </View>    
        </View>
        
        <View style={styles.separator}/>
        
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0,
        borderRadius: 10,
        marginTop: 10,
        padding: 6,
        width:"95%",
        flexDirection: "column", 
        alignContent: "space-between"
    },
    headerContainer:{
        flexDirection: "row", 
        backgroundColor: "#641E16", 
        marginRight: 10, 
        paddingTop: 15, 
        paddingBottom: 15, 
        borderRadius: 25
    },
    headerTitle:{
        flexDirection: "row", 
        alignItems: "center", 
        flex: 1
    },
    headerText:{
        fontFamily: "LemonMilk",
        fontSize: 17, 
        marginLeft: 10,
        letterSpacing: 1
    },
    headerButtons:{
        marginRight: 10, 
        flexDirection: "row"
    },
   closeButton:{
        width: 40,
        height: 40,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 20,
        padding: 8,
        backgroundColor: '#909497'
   },
   closeContainer:{
        elevation : 10,
        position: "absolute",
        width: "100%",
        alignItems: "flex-end"
    },
    centeredView: {  
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 10, 
        paddingBottom: 10
    },
    modalBody:{
        flex: 1, 
        backgroundColor: '#666f2d', 
        borderRadius: 20, 
        width:"95%", 
        height:"95%", 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2,}, 
        shadowOpacity: 0.25, 
        shadowRadius: 4,
        elevation: 5
    },
    textContainer: {
        alignItems: 'center', 
        padding: 25
    },
    textTitle: {
        color: "whitesmoke",
        fontSize: 22, 
        paddingBottom: 20, 
        textDecorationLine: "underline",
        fontFamily: "LemonMilk"
    },
    textBody: {
        color: "whitesmoke",
        fontSize: 20, 
        textAlign: "center",
        fontFamily: "LemonMilk"
    },
    separator:{
        width:"100%", 
        opacity: 0.3, 
        height: 0.5, 
        alignSelf: "center", 
        marginTop: 10
    }
  });
  