import React from 'react'
import { View , StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'
import { faShield } from '@fortawesome/free-solid-svg-icons/faShield'
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan'





import { Text ,Button} from "native-base";




const MenuList = () => {
  return (
    <View style={style.menuWrap}>
     <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faKey } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">Change password</Text>
    </View>
    <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faShield } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">General</Text>
    </View>
    <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faLanguage } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">Language</Text>
        <Text style={style.textItemLang} bold fontSize="md" ml="2.5">English</Text>

    </View>
    <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faWallet } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">User Accounts</Text>
    </View>
    <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faLink } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">Linked Accounts</Text>
    </View>
    <View style={style.menuItems} >
        <FontAwesomeIcon icon={ faBan } />
        <Text style={style.textItems} bold fontSize="md" ml="2.5">Disabled Accounts</Text>
       
    </View>
    </View>

      
    
  )
}

const style = StyleSheet.create({
    menuItems:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,
        marginLeft:10,
    },
    menuWrap:{
        width:"100%",
        height:"80%",
        backgroundColor:"#F9F9F9"
    },
    textItems:{
        color:"grey"
    },
    textItemLang:{
        marginLeft:220,
        color:"grey"
    }
})

export default MenuList