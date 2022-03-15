import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'

export default function Creditos() {
    return (
        <View style={styles.container}>
            <View style={styles.viewRow}>
                <ScrollView contentContainerStyle={{alignItems: "center"}}>
                     <View style={styles.containerText}>
                        <Text style={styles.tituloHeader}>AUDIOGUIA</Text>
                        <View style={styles.imageContainer}>
                        <Image resizeMode="contain" style={styles.imageHeader} source={require('../../assets/LogoLaCarolina.jpg')}/>
                        </View>
                    </View>
                    <Text style={styles.title}>
                        Créditos
                    </Text>
                    <Text style={styles.text}>
                        Intendente de la Carolina:{"\n"} 
                        C.P. Alberto Ferraro{"\n"}{"\n"}

                        Idea, Dirección artística y Producción{"\n"}
                        Lic. Diego García Milá{"\n"}{"\n"}

                        Dramaturgia, Dirección de actores y Locución{"\n"}
                        Hernesto Mussano{"\n"}{"\n"}

                        Corrección de textos y Locutora{"\n"}
                        Lic. Yamila Grandi{"\n"}{"\n"}

                        Locutor (Don Ignacio):{"\n"}
                        Sergio Barroso{"\n"}{"\n"}

                        Versión portuguesa:{"\n"}
                        Locución y traducción:{"\n"}
                        Lic. Ana Terra Leme{"\n"}{"\n"}

                        Versión inglesa:{"\n"}
                        Locución y traducción:{"\n"}
                        Prof. Claire Gregory{"\n"}{"\n"}

                        Programación de App:{"\n"}
                        Agustín Ezequiel Bascuñan{"\n"}{"\n"}

                        Diseño Gráfico:{"\n"}
                        Lola Raffo{"\n"}{"\n"}

                        Diseño de mapa:{"\n"}
                        Sebastián Pérez{"\n"}{"\n"}

                        Fotos:{"\n"}
                        Marisa Vázquez y otros{"\n"}
                        Créditos en cada fotografía{"\n"}{"\n"}

                        Armado de carteles viales:{"\n"}
                        Walter Quiroga{"\n"}{"\n"}

                        Música Original:{"\n"}
                        Gato cuyano - Volador:{"\n"}
                         Abel Taborda y Diego Milá{"\n"}
                        Tonada - De tus entrañas: {"\n"}
                        Abel Taborda{"\n"}
                        Vals cuyano, el minero:{"\n"}
                         Diego Milá{"\n"}
                        vías: Diego Milá{"\n"}
                        Belleza natural: Diego Milá{"\n"}
                        Desierto: Diego Milá{"\n"}{"\n"}

                        Diseño de sonido:{"\n"}
                        García Milá - Mussano{"\n"}{"\n"}

                        Grabación versión portuguesa{"\n"}
                        Lic. Marcelo Fabian Martinez{"\n"}{"\n"}

                        Locuciones en La Capilla:{"\n"}
                        Juanita: Aitana Luz García Milá{"\n"}
                        María: Binta García Milá{"\n"}{"\n"}

                        Poema en "El valle":{"\n"}
                        de Hernesto Mussano{"\n"}{"\n"}

                        Texto La Capilla{"\n"}
                        Grandi-Mussano{"\n"}{"\n"}

                        Textos: La Negra libre{"\n"}
                         y Mina de Oro{"\n"}
                        Hernesto Mussano{"\n"}{"\n"}
                        {"\n"}
                        Aportaron contenidos {"\n"}
                        para esta audioguía:{"\n"}{"\n"}
                        Guía y técnico en Turismo:{"\n"}
                        Pablo Alejandro Jolivot{"\n"}{"\n"}
                        Guía y técnico en Turismo:{"\n"}
                         Roxana Lucero Zabala{"\n"}{"\n"}
                        Guía de Turismo: Sergio Ratto{"\n"}{"\n"}
                        Lic. María Valeria Velasco Videla{"\n"}{"\n"}
                        Municipalidad de la Carolina
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
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
    text:{
        fontSize: 15, 
        textAlign: "center",
        alignItems: 'center', 
        padding: 25,
        fontFamily:"LemonMilk",
        color: "black"
        //color: "#f4f0d4"
    },
    title:{
        fontFamily:"LemonMilk",
        fontSize: 25,
        textDecorationLine: "underline", 
        paddingTop: "5%",
        textAlign: "center",
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
