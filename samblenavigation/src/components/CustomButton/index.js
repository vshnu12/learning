import React from "react";
import { View, Text, TouchableOpacity, button, Image } from "react-native";
import style from "../common/style";
import colors from "../common/colors";
import { useDimensionContext } from "../../context";


const CustomButton = props => {
    const dimensions = useDimensionContext();

    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const { type, handleButtonPress, icon, buttonText } = props;
    return (

        <TouchableOpacity
            onPress={handleButtonPress}
            style={[
                responsiveStyle.button,
                {
                    backgroundColor:
                        type === 'primary' ? colors.CobaltBlue : colors.GlaucousBlue,
                },
            ]} >
            {type !== 'primary' ? <Image source={icon} style={responsiveStyle.icon} /> : null}
            <Text
                style={{
                    color: type === 'primary' ? colors.white : colors.black,
                    fontFamily:
                        type === 'primary' ? 'Lato-Bold' : 'Lato-Regular',
                    fontSize: type === 'primary' ? 20 : 14,

                }} >
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};
0
export default CustomButton;