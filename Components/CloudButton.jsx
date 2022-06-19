import React from 'react'
import { View , StyleSheet } from 'react-native'
import { Text ,Button} from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud'



const CloudButton = () => {
  return (
    <View style={style.btnContainer}>
    <View style={style.cloud}>
               <View style={style.wrapper}>
                <FontAwesomeIcon style={style.icon} icon={ faCloud } />
                 <Text style={style.text}bold fontSize="md">Storage</Text>
        
                </View>
      <View style={style.storage}>
       <View style={style.line}>

        </View>
        
       </View>
    <Text style={style.data} bold fontSize="md">4 GB of 15 GB Used</Text>

    </View>

    
    <View style={style.btn}>
    <Button size="md" variant="outline" colorScheme="purple">
            BUY STORAGE
          </Button>
          </View>
          </View>
  )
}

const style = StyleSheet.create({
    
    btnContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:25,
        width:"80%",
        height:"20%",
        backgroundColor:"#F9F9F9",
    },
    cloud:{
        flexDirection:"column",
        justifyContent:"space-around",
        marginLeft:10
       
    },
    icon:{
        
    },
    text:{
        marginLeft:20
    },
    storage:{
        height:"5%",
        width:"100%",
        backgroundColor:"white",
        marginTop:10
    },
    line:{
        height:"100%",
        width:"40%",
        backgroundColor:"purple"
    },
    wrapper:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    data:{
        marginTop:10
    },
    btn:{
        width:"40%",
        marginRight:10
    }
})

export default CloudButton