import React, { useEffect } from 'react';
import { Text, View,Image } from 'react-native';
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../components/common/colors';
import CustomSearch from '../../components/CustomSearch';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';


const Orders = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CommonHeaderLeft/>,
        });
    }, []);

    return (
        <View >
            <CustomSearch filter={true} />
            <FlatList/>
            <View
                style={{
                    backgroundColor: colors.azureBlue,
                    borderRadius: 15,
                    padding: 15,
                    overflow: 'hidden',
                    margin: 15,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: colors.gery,
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        //margin:5,
                        textAlign:'center',
                    }}>
                    <View >
                        <Text style={{ color: colors.black, fontSize:15, fontFamily:'Lato-Bold', }}>ID: #ASW234</Text>
                        <Text style={{ color: colors.primaryGreen, fontSize:12  }}>Ordered on: 11/12/2022, 4:09 PM</Text>
                        <Text style={{ color: colors.black , fontSize:12   }}>1800 Elis St, San Fransisco, CA</Text>
                        <Text style={{ color: colors.black  , fontSize:12 }}> 94115, USA</Text>
                        <Text style={{ color: colors.black , fontSize:12  }}>
                               Paid: <Text style={{ color: colors.primaryGreen, fontSize:15  }}>879.00</Text>, Items: <Text>3</Text>
                        </Text>
                    </View>
                    <Image source={require('../../assets/images/map.jpg')}
                    style={{width:100,height:100,borderRadius:15,overflow:'hidden',resizeMode:'contain',}}/>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 10,

                    }}>

                    <Text style={{ color: colors.black , fontSize:15, marginLeft:-5,  }}>Order Shipped</Text>
                    <Text style={{ color: colors.black , fontSize:15, marginRight:-15 ,}}>             Rate & Review Products</Text>

                    <View></View>
                </View>
            </View>
        </View>
    );
};

export default Orders;
