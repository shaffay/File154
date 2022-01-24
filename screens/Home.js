import { StyleSheet, Text, View,Image } from 'react-native';
import {Card , FAB ,Title} from 'react-native-paper';


export default function Home() {
  return (
    <View style={styles.container}>
      
<Card style={styles.card}>

<View style={styles.cardview} >

    <Image 
    source={{uri:"https://shaffaybajwa.com/assets/img/abc.jpg"}}
    style={styles.img}
    />

<View style={styles.cardtext}>

<Title>Shaffay Bajwa</Title>
    <Text>This is Home Screen</Text>

</View>

    
</View>

</Card>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  card:{
      padding:5,
      margin:8,
      
  },
img:{
    height:90,
    width:90,
    borderRadius:90/2
},
cardview:{
    flexDirection:"row"
},
cardtext:{
    flexDirection:"column",
    margin:9,
    padding:5,
}
});
