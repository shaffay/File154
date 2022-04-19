import React, { useEffect,useState } from "react";  
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card , FAB ,Title} from 'react-native-paper';


export default function Home( props ) {

  const [data , setdata] = useState([]) 
  const [loading , setloading] = useState(true) 


  const fetchData = () =>{

    fetch("https://fn154.herokuapp.com/")
    .then((res)=>res.json())
    .then((result)=>{
      
      setdata(result);
      setloading(false);
    })


  }
  useEffect(
    () => {
      fetchData();
    }
  )

  const renderList = (item) =>{
          return(
            
            <Card  style={styles.card} theme={theme} key={item.id} onPress={ () =>  props.navigation.navigate('Profile', {item} )} >

            <View style={styles.cardview} >

                <Image 
                source={{uri:item.picture}}
                style={styles.img}
                />

            <View style={styles.cardtext}>

                <Title>{item.name}</Title>
                <Text>{item.position}</Text>

            </View>

                
            </View>

          </Card>
          )
  }

  return (
    <View style={styles.container}>
              

      <FlatList
      
      data={data}
      renderItem={( {item} )=>{
        return renderList(item)
      }}
      onRefresh={() => fetchData()}
      refreshing={loading}

      />  
              <FAB
          style={styles.fab}
          large
          theme={theme}
          icon="plus"
          onPress ={() =>   props.navigation.navigate('Add Employee')}
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
