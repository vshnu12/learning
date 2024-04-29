import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "react-native-elements";
import { useDimensionContext } from "../../context";
import style from "../common/style";
import { } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const CommonHeaderRight = props => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    const handlePress = () => {

        navigation.navigate('Cart');

    };



    return (
        <View style={responsiveStyle.chrflex}>

            {props.share ? (
                <TouchableOpacity style={{ padding:-30 }} onPress={handlePress}>
                    <>
                        
                        <EvilIcons name="heart"  size={45} color="#000" />
                    </>
                </TouchableOpacity>
            ) : null}
            {props.Cart ? (
                <TouchableOpacity style={{ padding: 15 }} onPress={handlePress}>
                    <>
                        <View style={responsiveStyle.chrcartcount}>
                            <Text style={responsiveStyle.cartcount}>2</Text>
                        </View>
                        <Image
                            source={require('../../assets/images/cart+.png')}
                            style={responsiveStyle.chleftimage}
                        />
                    </>
                </TouchableOpacity>
            ) : null}

        </View>

    );
};

export default CommonHeaderRight;
