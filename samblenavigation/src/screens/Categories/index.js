import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View,Image,TouchableOpacity, ImageBackground } from 'react-native'; 
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../components/common/colors';
import CustomSearch from '../../components/CustomSearch';
import firestore from '@react-native-firebase/firestore';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

  

const Categories = () => {
  const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const {categories} = useSelector(state => state);
   const [Products, setProducts] = useState([]);
   const [active, setactive] = useState(0);
   
   
   

useEffect(() => {
  navigation.setOptions({
    headerLeft: () => <CommonHeaderLeft />,
  });
  getProducts();
}, []);


const getProducts = async () => {
  await firestore()
    .collection("Products")
    .get()
    .then(snapshot => {
      if (!snapshot.empty) {
        const result = [];
        snapshot.docs.forEach(doc => {
          if (doc.exists) {
            result.push(doc.data());
          }
        });
        setProducts(result);
      }
    })
    .catch(err => {
      console.log(err);
    })
};
   
       const handleCategoryTouch = index => {
        setactive(index);
       };

   return (
        <View style={responsiveStyle.catmain} >
            <ScrollView style={responsiveStyle.categoryscrollview}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}>
            <CustomSearch/>
            <View style={responsiveStyle.caterowstyle}>
            {/* SideBar/ */}
            <View>
            <FlatList
           data={categories}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={responsiveStyle.catflatlist}
           keyExtractor = {({item, index}) => String(index)}
          renderItem={({item, index}) => {
            return(
                <TouchableOpacity style={[responsiveStyle.cattouch, {backgroundColor: index=== active? colors.white : 'transparent',},
            ]}
            onPress={() =>handleCategoryTouch(index)}>
              <Image source={{uri: item.image}} style={responsiveStyle.catimage}/>
              </TouchableOpacity>
            );
            }}
            />
          </View>
         {/* Content/ */}
         <ScrollView showsVerticalScrollIndicator={false}>
         <ImageBackground source={require('../../assets/images/bcart.jpg')} style={responsiveStyle.catbackimage}>
    <Text style={ responsiveStyle.catename}>
        {categories[active]?.name} 
    </Text>
    <Text style={responsiveStyle.catdescription}>
        {categories[active]?.description} 
    </Text>
   </ImageBackground>
</ScrollView>

            </View>
            </ScrollView>
                </View>
   );
};

export default Categories;
