import * as React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card , FAB ,Title} from 'react-native-paper';


export default function Home( props ) {

  const data = [
    {
    id:'1',
    name:'Shaffay Bajwa',
    position:'Faculty',
    salary:'2-lac',
    picture:'https://images.unsplash.com/photo-1637722876963-4c68ebce6d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email:'shaffaybajwa@gmail.com',
    phone:'03128780074'},

    {id:'2',name:'Mohammad Usman',position:'Frontend-Dev',salary:'30k',picture:'https://images.unsplash.com/photo-1642893746687-3a2c172d8f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',email:'shaffaybajwa@gmail.com',phone:'03128780074'},
    {id:'3',name:'Huzifa Rizwan',position:'Shopify-Expert',salary:'2k',picture:'https://images.unsplash.com/photo-1642977131886-08ef4325d080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',email:'shaffaybajwa@gmail.com',phone:'03128780074'},
    {id:'4',name:'Muaaz Kazabti',position:'Freelancer',salary:'0k',picture:'https://images.unsplash.com/photo-1638225307009-07f55cbb1991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',email:'shaffaybajwa@gmail.com',phone:'03128780074'},

  ]

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
