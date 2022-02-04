import { StyleSheet, Text, View,Image } from 'react-native';
import { Card,Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons  } from '@expo/vector-icons'; 


export default function Profile() {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#877029', '#211c0e']}
        style={styles.background}
      />
      <View style={{ alignItems: 'center' }}>

      <Image 
      style={styles.img}
      source={{uri:"https://images.unsplash.com/photo-1513064840867-06fb871b30e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}}
      />
      </View>

<View style={styles.title}>

<Title style={{fontSize:22}}>Shaffay Bajwa</Title>
<Text style={{fontSize:14,fontWeight:'bold'}}>ReactNative Dev</Text>

</View>



      <View style={styles.body}> 


          <Card style={styles.cards}  onPress={()=>{ console.log('PressedEmail') }} >
            <View style={styles.cardview}>
              <MaterialIcons  name="email" size={28} color="#8c8570" />
              <Text style={styles.cardtext} > Email: </Text>
              <Text style={{fontSize:20,fontWeight:"400"}} 
              > 
              shaffaybajwa@gmail.com
              </Text>
            </View>
          </Card>
          <Card style={styles.cards}  onPress={()=>{ console.log('PressedPhone') }} >
            <View style={styles.cardview}>
            <Ionicons name="ios-phone-portrait" size={28} color="#8c8570" />             
              <Text style={styles.cardtext} > Phone: </Text>
              <Text style={{fontSize:20,fontWeight:"400"}} 
              > 
               0312-8780074
              </Text>
            </View>
          </Card>


      </View>



    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  background:{
    height:200,
    width:800,
    position: 'absolute',
  },
  img:{
    height:200,
    width:200,
    borderRadius:200/2,
    marginTop:100,
    
  },
  body:{
    marginTop:30
  },
  cards:{
    marginLeft:30,
    marginRight:30,
    marginTop:12,
    borderRadius:18,
   
  },
  title:{
    alignItems:"center",
    marginTop:10,
    
  },
  cardview:{
    margin:8,
    flexDirection:"row",
    marginLeft:15

  },
  cardtext:{
    
    //marginTop:2,
    fontWeight:'bold',
    fontSize:20
  }
});
