import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native'; 
import style from '../../../../components/common/style';
import { useDimensionContext } from '../../../../context/index';
import firestore from '@react-native-firebase/firestore';
 import colors from '../../../../components/common/colors'; 
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Trending = () => {
    

    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const {categories} = useSelector(state => state);
   return (
    <View style={responsiveStyle.trendingmain}>
        <Text style={responsiveStyle.trendingtitle}>Trending Category</Text>
   <FlatList 
      data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor = {({item, index}) => String(index)}
       contentContainerStyle={responsiveStyle.trendingflatlist}
        renderItem={({item, index}) => {
            const Categoriescolor = 
     index % 4 === 0
     ? colors.Category1
     : index % 4 ===1
     ? colors.Category2
     : index % 4 ===2
     ? colors.Category3
     : index % 4 ===3
     ? colors.Category4
     : colors.Category1;
          return (
          <TouchableOpacity style={[responsiveStyle.terndingviewimage, {backgroundColor:Categoriescolor}]}>
            <Image source={{uri: item.image}} style={responsiveStyle.trendingimages}/>
          </TouchableOpacity>
          );
    }}
        />
        
        </View>
   );
};

export default Trending;

