import { View, Text, Image } from "react-native";
import { useDimensionContext } from "../../context";
import style from "../../components/common/style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import CommonHeaderRight from "../../components/CommonHeaderRight";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating-widget';
import colors from "../../components/common/colors";
import MoreInfo from "./components/moreinfo";
const ProductDetails = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);



    const route = useRoute();
    const { Product } = route.params;
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);
    console.warn(Product);


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CommonHeaderLeft type="back" />,
            headerRight: () => <CommonHeaderRight Cart={true} share={true} />,
            title: '',

        });
    }, []);

    return (
        <ScrollView>
            <View style={responsiveStyle.heart}>

                <Ionicons name="heart-outline" size={30} color="#000" />
                <Ionicons name="heart-sharp" size={30} color="#000" />
            </View>
            <Image source={{ uri: Product.image }} style={responsiveStyle.pdproductimage} />
            <View style={responsiveStyle.pdmainview}>
                <Text style={{ color: colors.black ,fontFamily:'Lato-Black',fontSize:30,margin:10,}}>{Product.name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <StarRating
                        rating={rating}
                        onChange={setRating} />
                    <Text style={{
                        color: colors.gery,
                        marginLeft: 10,
                        fontFamily: 'Lato-Regular',
                        fontSize: 18,
                    }} >(1 rating)</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <Text style={{ color: colors.black, fontFamily:'Lato-Bold', fontSize:20,marginVertical: 10, }}>{parseFloat(Product.price).toFixed}</Text>
                    <Text style={{
                        color: colors.primaryGreen,
                        marginLeft: 10,
                        fontFamily: 'Lato-Bold',
                        fontSize: 18,
                    }} >25% off</Text>
                </View>
               

            
                </View>
                <MoreInfo />
            
            <View style={{ borderWidth: 1, borderBottomColor: colors.black, paddingBottom: 10, }}>
                <Text style={responsiveStyle.pddescriptionhead}>Product Details</Text>
                <Text style={responsiveStyle.pddescription}>{product.description}</Text>
            </View>
            <ExtraInfo/>

        </ScrollView>
    );
};

export default ProductDetails;