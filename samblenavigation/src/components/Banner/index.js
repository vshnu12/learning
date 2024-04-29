import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, } from "react-native";
import style from "../common/style";
import { useDimensionContext } from "../../context";
//import React,{useEffect} from "react";
import firestore from '@react-native-firebase/firestore';

const Banner = () => {
     const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
   
   const [bannerItems, setbannerItems] = useState([]);
   
    useEffect(() =>{
       getBanners();
    }, []);


   const getBanners = async ()=> {
        await firestore().collection('Banner').get().then((snapshot) =>{
          if (!snapshot.empty){
            const result =[];
              snapshot.docs.forEach(doc => {
              if(doc.exists){
              result.push(doc.data());
              }
            })
            setbannerItems(result);
          }
        })
        .catch(err => {
          console.log(err);
        });
      };
   
return ( 
  <View>
  <FlatList
    data={bannerItems}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index) => String(index)}
    renderItem={({item, index}) => {
      return (
        <ImageBackground
          source={{uri: item.image}}
          style={responsiveStyle.banner}>
          <View style={responsiveStyle.innerView}>
            <Text style={responsiveStyle.head}>{item.Head}</Text>
            <Text style={responsiveStyle.content}>{item.description}</Text>
            <TouchableOpacity style={responsiveStyle.touch}>
              <Text style={responsiveStyle.touchText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }}
  />
</View>
    );
    
  };
export default Banner;