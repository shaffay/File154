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

          <Button style={styles.mbtn} theme={theme} icon="upload" mode="contained" onPress={() => console.log('Image')}>
          Camera
          </Button>
          <Button style={styles.mbtn} theme={theme} icon="content-save-settings-outline" mode="contained" onPress={() => console.log('Image')}>
          Gallery
          </Button>

    </View>


</Modal>


    </View>
  );
}

const theme = {

  colors:{
    primary: '#4287f5',
    accent: '#4245f5',
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
    flexDirection:"row",
    position: "absolute",
    bottom: 40,
    width: "100%",
    backgroundColor: "white",
    justifyContent:"space-evenly"

  },
  mbtn:{
    margin:10,
    padding: 10,
  }
});
