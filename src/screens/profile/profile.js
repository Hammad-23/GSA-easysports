import React from 'react';
import {View,Text,TouchableOpacity,ScrollView,StyleSheet,TextInput} from 'react-native';

import Header from '../../components/Header';


export default function Profile(){
    return(
        <>
        <Header/>
        <ScrollView contentContainerStyle={style.main}>
          <View style={style.content}>

            <View style={style.heading}>
                <Text>Konto-Einestullengun</Text>
            </View>

            <View style={{marginTop:30}}> 
             <Text style={{fontWeight:"bold"}}>Benutzername:</Text>
             <TextInput placeholder="Enter" style={style.inp} />
   
            </View>

            <View style={{marginTop:20}}>
              <Text style={{fontWeight:"bold"}}>Profilbild hochladen:</Text>
            </View>





          </View>

        </ScrollView>
        









        </>
    )
}
const style = StyleSheet.create({
    heading:{
        marginTop:20,
        borderBottomWidth:1
    },
    content:{
        width:"90%"
    },
    main:{
        alignItems:"center",
        backgroundColor:"#FFFF"
    },
    inp:{
        borderWidth:1,
        borderColor:"grey"
        
    }
})