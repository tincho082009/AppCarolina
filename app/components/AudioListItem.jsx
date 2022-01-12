import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, Modal, Pressable, StyleSheet} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import ImageViewer from 'react-native-image-zoom-viewer';
import Player from "./Player";

export default function AudioSlider(props){
    const {audio, nombre, imagenes, descripcion} = props;
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("");

    const makeVisible = (type) => {
        setType(type)
        setVisible(true);
    }

    return (
        <>
        <Modal visible={visible} transparent={false} animationType="slide" onRequestClose={() => { setVisible(false)}} >                    
            {
                type == "images" ?
                    <ImageViewer enableSwipeDown={true} onSwipeDown={()=> setVisible(false)} imageUrls={imagenes}/>
                :
                    <View style={styles.centeredView}>
                        <ScrollView style={styles.modalBody} 
                        contentContainerStyle={{alignItems: 'center'}}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textTitle}>
                                    {nombre}
                                </Text>
                                <Text style={styles.textBody}>
                                    {descripcion}
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
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}> 
                <View style={styles.headerTitle}>
                    <Text style={styles.headerText}>
                        {nombre}
                    </Text>
                </View>
                <View style={styles.headerButtons}>
                    <Pressable onPress={() => makeVisible("images")}>
                        <Icon  name="image" type="material-community" color="#EDBB99" ></Icon>
                    </Pressable>
                    <Pressable style={{marginLeft: 20}} onPress={() => makeVisible("text")}>
                        <Icon name="format-list-bulleted" type="material-community" color="#EDBB99" ></Icon>
                    </Pressable>
                </View>
            </View>
            <View>
                <Player track={audio} />    
            </View>
        </View>
        <View style={styles.separator}/>
        
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 0,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 8,
        paddingRight: 8,
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
        color: "#EDBB99", 
        fontSize: 20, 
        marginLeft: 10
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
        backgroundColor: '#424949', 
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
        padding: 35
    },
    textTitle: {
        fontSize: 25, 
        paddingBottom: 20, 
        textDecorationLine: "underline"
    },
    textBody: {
        fontSize: 22, 
        textAlign: "center"
    },
    separator:{
        backgroundColor: "#333", 
        width:"100%", 
        opacity: 0.3, 
        height: 0.5, 
        alignSelf: "center", 
        marginTop: 10
    }
  });
  