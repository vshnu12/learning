import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import style from "../common/style";
import { useDimensionContext } from "../../context";
import colors from "../common/colors";
import CommonSectionHeader from "../CommonSectionHeader";
import firestore from '@react-native-firebase/firestore';

const ProductScroll = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    const [ProductsItems, setProductsItems] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = async () => {
        await firestore().collection('Products').get().then((snapshot) => {
            if (!snapshot.empty) {
                const result = [];
                snapshot.docs.forEach(doc => {
                    if (doc.exists) {
                        result.push(doc.data());
                    }
                })
                setProductsItems(result);
            }
        })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <View style={responsiveStyle.pscontent}>
            <CommonSectionHeader
                head={'Newly Added'}
                content={'Pay less, Get more'}
                righttext={'See All'}
            />

            <FlatList
                data={ProductsItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={({ item, index }) => String(index)}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: 150, height: 250, padding: 15,
                            marginRight: 15, marginVertical: 15, borderRadius: 20,
                            borderWidth: 1, borderColor: colors.aquaBlue
                        }} >
                            <Image source={require('../../assets/images/wish.jpg')}
                                style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'flex-start', }} />
                            <Image source={{ uri: item.image }}
                                style={{ width: 70, height: 70, resizeMode: 'contain', alignSelf: 'center', }} />
                            <Text style={{ color: colors.black, fontFamily: 'Lato-Black', fontSize: 20, }} numberOfLines={1}>{item.name}</Text>
                            <Text style={{ color: colors.black, fontFamily: 'Lato-Regular', fontSize: 18, }} numberOfLines={2} >{item.description}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: colors.black, fontFamily: 'Lato-Regular', fontSize: 20, }} >{item.price}</Text>
                                <Text style={{ padding: 5, backgroundColor: colors.black, borderRadius: 5, }} >+</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
};

export default ProductScroll;
