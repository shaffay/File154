import React, { useState } from "react";
import { StyleSheet,Modal, Text, View,Image,FlatList } from 'react-native';
import {Card , TextInput,Button  } from 'react-native-paper';


export default function CreateEmployee() {

  const [Name, setName] = useState("Shaffay");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState("");
  const [Picture, setPicture] = useState("");
  const [VModal, setModal] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.formsection}>

   <TextInput
      label="Name"
      style={styles.inputs}
      value={Name}
      theme={theme}
      mode="outlined"
      onChangeText={text => setName(text)}
    />
   <TextInput
      label="Email"
      style={styles.inputs}
      value={Email}
      theme={theme}
      mode="outlined"
      onChangeText={text => setEmail(text)}
    />
   <TextInput
      label="Position"
      style={styles.inputs}
      value={Position}
      theme={theme}
      mode="outlined"
      onChangeText={text => setPosition(text)}
    />
   <TextInput
      label="Phone"
      style={styles.inputs}
      value={Phone}
      theme={theme}
      mode="outlined"
      onChangeText={text => setPhone(text)}
    />
   <TextInput
      label="Salary"
      style={styles.inputs}
      value={Salary}
      theme={theme}
      mode="outlined"
      onChangeText={text => setSalary(text)}
    />


  <Button style={styles.btn} theme={theme} icon="upload" mode="contained" 
  onPress={() => setModal(true)}>
    Upload Image
  </Button>
  <Button style={styles.btn} theme={theme} icon="content-save-settings-outline" mode="contained" onPress={() => console.log('Image')}>
    Submit
  </Button>

      </View>





<Modal
  animationType="slide"
  transparent={true}
  visible={VModal}
  onRequestClose={() => {
    setModal(false);
  }}
>

    <View style={styles.modalview}>

      <View style={{  flexDirection:"row",justifyContent:"space-evenly"}}>

          <Button style={styles.mbtn} theme={theme} icon="camera-plus" mode="contained" onPress={() => console.log('Image')}>
          Camera
          </Button>
          <Button style={styles.mbtn} theme={theme} icon="image-multiple" mode="contained" onPress={() => console.log('Image')}>
          Gallery
          </Button>

      </View>

        <View style={{alignItems:"center"}}>
          <Button style={styles.cbtn} theme={{ colors:{primary:'#877029'} }} icon="backburger" mode="contained" onPress={() => setModal(false)}>
         Go Back
          </Button>

      </View>
          

    </View>


</Modal>


    </View>
  );
}

const theme = {

  colors:{
    primary: '#211c0e',
    accent: '#877029',
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  formsection:{
    margin:10,
  
    padding:8,
  },
  inputs:{
    margin:5,
  
  },
  btn:{
    marginTop:20,
  },
  modalview:{
   
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "19%",
    backgroundColor: "white",
    
  },
  mbtn:{
    margin:10,
    padding: 3,
  },
  cbtn:{
    margin:10,
    width:320,
    justifyContent:"center",
  }

});
