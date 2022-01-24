import { StyleSheet, Text, View,Image } from 'react-native';
import {Card , FAB ,Title} from 'react-native-paper';


export default function Home() {
  return (
    <View style={styles.container}>
              
       <Card style={styles.card} theme={theme}>

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

              <FAB
          style={styles.fab}
          large
          theme={theme}
          icon="plus"
          onPress ={() => console.log('hit hui ha')}
        />
    
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
},
fab:{

  position: 'absolute',
  margin: 16,
  right: 0,
  bottom:5,
}
});
