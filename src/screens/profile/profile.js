import React,{useState} from 'react';
import {View,Text,TouchableOpacity,ScrollView,StyleSheet,TextInput, SafeAreaView,Image} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/Header';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function Profile(){
  const [uri,setUri] = useState('')
const options={
  title: 'Select Image',
  customButtons: [
    { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}
  function pickImage() {
    launchImageLibrary(options,(res)=>{
      console.log("My REsponse in Image Pick -->> ", res);
      setUri(res.assets[0].uri)
    })
  }
    return(
        <SafeAreaView style={{flex:1}} >
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
              <TouchableOpacity onPress={()=>pickImage()} style={{marginTop:10, borderColor:"#5f5f5f", borderWidth:1, borderRadius:5, width:'30%',alignItems:"center", paddingVertical:5, backgroundColor:"#dfdfdf"}}>
                <Text>Choose file</Text>
              </TouchableOpacity>
             {uri? <Image source={{uri:uri}} style={{width:"30%",height:100, borderRadius:100, marginTop:10}}  />:<View/>}
            </View>

            <View style={{marginTop:20}}>
               <Text style={{fontWeight:"bold",fontSize:15}}>E-Mail-Adresse:</Text>
               <TextInput editable={false} value={"abc@gmail.com"} placeholder="Enter" style={style.inp,{color:"grey", borderWidth:1,
        borderColor:"grey",
        paddingVertical:8,
        paddingHorizontal:8}}/>
            
            </View>

            <View style={{marginTop:20}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
               <Text style={{fontWeight:"bold"}}>Passwort:</Text>
               <Text style={{fontSize:11}}> (Lassen si dissess Feld leer, wenn sie lhr passwort </Text>
               </View>
               <Text style={{fontSize:11}}> nicht andern mochten )</Text>
               <TextInput secureTextEntry={true}  style={style.inp}/>
            
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
      </SafeAreaView>
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
        borderColor:"grey",
        paddingVertical:8,
        paddingHorizontal:8
        
    }
})