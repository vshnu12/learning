import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import colors from '../../components/common/colors';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const WishList = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
              return (
                
              <TouchableOpacity>
                <View style={responsiveStyle.wishlistcarttext1}>
                <Text style={responsiveStyle.wishlistcount}>2</Text>
                </View>
                    <Image source={require('../../assets/images/cart+.png')}
                           style={responsiveStyle.whislistimage} />
                </TouchableOpacity>
            );
        },
        headerLeft: () => <CommonHeaderLeft/>,
        
        });
    }, []);


const sampleWishList = [
  {
    id: 1,
    title: 'Grapes',
    description: 'Freshly from farm',
    price: '13.00',
    off: '50%',
    image: require('../../assets/images/cart+.png'),
  },
  {
    id: 2,
    title: 'Apples',
    description: 'Crispy and fresh',
    price: '15.00',
    off: '30%',
    image: require('../../assets/images/cart+.png'),
  },
  
];



    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    return (
        <View style={responsiveStyle.wishtlistcontainer}>
            <FlatList 
                data={sampleWishList} 
                keyExtractor={(item, index) => String(item.id)} 
                renderItem={({ item }) => ( 
                    <View style={responsiveStyle.wishlistproductview}>
                        
                        <Image source={item.image} style={responsiveStyle.whishlistproductimage} />
                        <View style={responsiveStyle.wishlistsecondview}>
                            <Text style={responsiveStyle.wishlisttitle}>{item.title}</Text>
                            <Text style={responsiveStyle.wishlistdesc}>{item.description}</Text>
                            <View style={responsiveStyle.wishlistbottomview}>
                                <Text style={responsiveStyle.wishlistprice}>{item.price}</Text>
                                <View style={responsiveStyle.wishlistoffview}>
                                    <Text style={responsiveStyle.wishlistofftext}>{item.off} OFF</Text>
                                </View>
                                <View style={responsiveStyle.wishlistcartview}>
                                    <Text style={responsiveStyle.wishlistcarttext}>Add to Cart</Text>
                                </View>
                            </View>
                            <View style={responsiveStyle.whishlistremoveview} >
                        <Image source={require('../../assets/images/delete.png')} style={responsiveStyle.whishlistremove} /> 
                        </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default WishList;
