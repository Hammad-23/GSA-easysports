import React from 'react';
import {View,Text,TouchableOpacity,ScrollView,StyleSheet,TextInput} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/Header';


export default function Profile(){
    return(
        <>
        <Header/>
        <View style={style.main}>
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

            <View style={{marginTop:20}}>
               <Text style={{fontWeight:"bold"}}>E-Mail-Adresse:</Text>
               <TextInput placeholder="Enter" style={style.inp}/>
            
            </View>

            <View style={{marginTop:20}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
               <Text style={{fontWeight:"bold"}}>Passwort:</Text>
               <Text style={{fontSize:11}}> (Lassen si dissess Feld leer, wenn sie lhr passwort </Text>
               </View>
               <Text style={{fontSize:11}}> nicht andern mochten )</Text>
               <TextInput  style={style.inp}/>
            
            </View>
            
            <View style={{marginTop:20}}>
            <Button
                fontSize={20}
                bgColor="#313d49"
                color="#FFFF"
                title="Update"
              />
            </View>
            <View style={{marginTop:10}}>
            <Button
                fontSize={20}
                bgColor="#313d49"
                color="#FFFF"
                title="Account loschen"
              />
            </View>

        
         
          </View>

        </View>
        









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
        backgroundColor:"#FFFF",
        height:"100%"
    },
    inp:{
        borderWidth:1,
        borderColor:"grey"
        
    }
})