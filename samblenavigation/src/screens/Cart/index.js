import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native'; 
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import OrderTotal from './component/OrderTotal';
import CommonButton from '../../components/CommonButton';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
   

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CommonHeaderLeft  />,
        });
    }, []);


    return (
        <View style={responsiveStyle.cartcontainer}>
            <View style={responsiveStyle.cartproductView}>
                <Image
                    source={require('../../assets/images/frt2.png')}
                    style={responsiveStyle.cartproductImage}
                />
                <View style={responsiveStyle.cartnameView}>
                    <Text style={responsiveStyle.cartname} numberOfLines={1}>
                        Lemon
                    </Text>
                    <Text style={responsiveStyle.cartdes} numberOfLines={2}>
                        Fresh From Farms
                    </Text>
                    <View style={responsiveStyle.cartpriceView}>
                        <View style={responsiveStyle.cartpriceView2}>
                            <Text style={responsiveStyle.cartprice}>₹10</Text>
                            <View style={responsiveStyle.cartoffView}>
                                <Text style={responsiveStyle.cartoffText}>50%</Text>
                            </View>
                        </View>
                        <View style={responsiveStyle.cartqunView}>
                            <Text style={responsiveStyle.cartqunText1}>- </Text>
                            <Text style={responsiveStyle.cartqunText2}>0</Text>
                            <Text style={responsiveStyle.cartqunText1}>+</Text>
                        </View>
                    </View>
                </View>
           
            </View>
            <OrderTotal/>
            <CommonButton buttonText={'Proceed to checkout'}/>
        </View>
        
    );
};

export default Cart;
