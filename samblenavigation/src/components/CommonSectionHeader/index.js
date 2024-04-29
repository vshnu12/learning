import React from "react";
import { View, Text } from "react-native";
import style from "../common/style";
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const CommonSectionHeader = (props) => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('Shop',{type:'all'})
    };
    return (
        <View style={responsiveStyle.pscontainer}>
            <View>
                <Text style={responsiveStyle.pstext1}>{props.head}</Text>
                <Text style={responsiveStyle.pstext2}>{props.content}</Text>
            </View>
            <Text style={responsiveStyle.pstext3} onPress={handleNavigate}>{props.righttext}</Text>
        </View>
    );
}

export default CommonSectionHeader;
