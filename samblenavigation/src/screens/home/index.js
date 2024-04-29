import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import style from '../../components/common/style';
import CommonHeader from '../../components/commonHeader';
import { useDimensionContext } from '../../context';
import CustomSearch from '../../components/CustomSearch';
import Banner from '../../components/Banner';
import { ReanimatedFlatList } from 'react-native-reanimated/lib/typescript/reanimated2/component/FlatList';
import RecentBought from './Components/RecentBought';
import ShopCategory from './Components/ShopCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OffersProduct';

const Home = () => {



    const dimensions = useDimensionContext();


    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);


    return (
        <View style={responsiveStyle.mainhome} >
            <CommonHeader />
            <ScrollView style={responsiveStyle.containerhome}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}>
                <CustomSearch />
                <Banner />
                <RecentBought />
                <ShopCategory />
                <ProductScroll />
                <OfferProducts />

<Text style={responsiveStyle.hometext1} >
    Didn't Find What You Are Looking For?
</Text>
<View style={responsiveStyle.homeview1}>
    <Text  style={responsiveStyle.hometext2} numberOfLines={1}>Browser Category</Text>
</View>
            </ScrollView>
        </View>
    );
};

export default Home;
