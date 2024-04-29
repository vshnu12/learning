import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import style from "../common/style";
import { useDimensionContext } from "../../context";
import colors from "../common/colors";
import Icon from 'react-native-vector-icons'
import CommonSectionHeader from "../CommonSectionHeader";

const OfferProducts = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    const Products = [
        {
            id: 0,
            name: 'spray',
            content: ' orgin of falvour',
            price: 20,
            image: require('../../assets/images/ViheHDLOGO.png'),
            off: '20%',
        },
        {
            id: 1,
            name: 'spray',
            content: ' orgin of falvour',
            price: 20,
            image: require('../../assets/images/623.jpg'),
            off: '20%',
        },
        {
            id: 2,
            name: 'spray',
            content: ' orgin of falvour',
            price: 20,
            image: require('../../assets/images/623.jpg'),
            off: '20%',
        },
        {
            id: 3,
            name: 'spray',
            content: ' orgin of falvour',
            price: 20,
            image: require('../../assets/images/8562.jpg'),
            off: '20%',
        },
        {
            id: 4,
            name: 'spray',
            content: ' orgin of falvour',
            price: 20000,
            image: require('../../assets/images/623.jpg'),
            off: '20%',
        },
    ];

    return (
    
        <View style={responsiveStyle.opcontent}>
            <View style={responsiveStyle.pscontent}>
            <CommonSectionHeader
            head={'Say Hello To Offers'}
            content={'Best price ever for all the time.'}
            righttext={'See All' }
            />
            </View>

            <FlatList
                data={Products}
                showsVerticalScrollIndicator={false}
                keyExtractor = {({item, index}) => String(index)}
                renderItem={({ item, index }) => {
                    return(
                    <View style={responsiveStyle.opstyle} >
                        <Image source={item.image}
                         style={responsiveStyle.opimage} />
                         <View style={responsiveStyle.opview} >
                        <Text style={responsiveStyle.optext1} numberOfLines={1}>{item.name}</Text>
                        <Text style={responsiveStyle.optext2} numberOfLines={2} >{item.content}</Text>
                        <View style={responsiveStyle.oppricetext}>
                        <View style={{ flexDirection: 'row',  justifyContent: 'space-between', marginTop:15, alignSelf:'auto' }}>
                            <Text style={responsiveStyle.optext3} >₹{item.price}</Text>
                            <View style={responsiveStyle.opview1}>
                                <Text style={responsiveStyle.optext4} >{item.off}</Text>
                                 </View>
                                 </View>
                                 <View style={responsiveStyle.opview2}>
                                    <Text style={responsiveStyle.optext5} >-</Text>
                                    <Text style={responsiveStyle.optext6}>0</Text>
                                    <Text style={responsiveStyle.optext7}>+</Text>
</View>
                            </View>
                        </View>
                        
                    </View>
                    )
                    
                }}
                
            />
        </View>
    );
};

export default OfferProducts;
