import { View ,Text,StyleSheet } from 'react-native'
import {ArrowBackIcon} from "native-base"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBattery } from '@fortawesome/free-solid-svg-icons/faBattery'
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi'
import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal'


import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
    <View style={styles.time}>
    <Text style={styles.timetext}>
        10:10
    </Text>
    <View style={styles.iconWrap}>
    <FontAwesomeIcon style={styles.faci} icon={ faBattery } />
    <FontAwesomeIcon style={styles.faci} icon={ faWifi } />
    <FontAwesomeIcon style={styles.faci} icon={ faSignal } />
    </View>
   


    </View>
    <View style={styles.textContainer}>
    <ArrowBackIcon style={styles.faci} />
    <Text style={styles.words}>
        Settings
    </Text>
    </View>
    
    </View>

    
  )
}



const styles = StyleSheet.create({
    navbar: {
      width:"100%",
      height:120,
      backgroundColor: 'purple',
    },
    time:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    timetext:{
        color:"white",
        marginLeft:10,
        fontWeight:"500"
    },
    words:{
        color:"white",
        marginLeft:10,
        fontSize:20
    },
    faci:{
        color:"white",
        marginRight:10
    },
    faicons:{
        color:"red"
    },
    iconWrap:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textContainer:{
        flexDirection:"row",
        alignItems:"center",
        color:"white",
        marginTop:50,
        marginLeft:10
    }

})

export default Navbar
