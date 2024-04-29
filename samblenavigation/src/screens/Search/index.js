import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native'; 
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import CustomSearch from '../../components/CustomSearch';
import Trending from './components/Trending';
import OfferProducts from '../../components/OffersProduct';
import { useNavigation } from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
  

const Search = () => {
 const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

   
    

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CommonHeaderLeft  />,
        });
    }, []);
   return (
    <View >
    <ScrollView style={responsiveStyle.categoryscrollview}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}>
    <CustomSearch/>
    <Trending/>
    <OfferProducts/>
    </ScrollView>
        </View>
   );
};

export default Search;
