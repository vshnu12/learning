import { View, Text } from "react-native";
import { useDimensionContext } from "../../../context";
import style from "../../Account/style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { colors } from "../../../components/common/colors"

const MoreInfo = props => {

    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'center', backgroundColor: colors.lightgrey,
                padding: 15, borderRadius: 5
            }}>
                <Text style={{ color: colors.black, fontFamily: 'Lato-Regular', fontSize: 18, }}>500g/24.00</Text>
                <AntDesign name="down" size={25} color={colo.gery} />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'center', backgroundColor: colors.lightgrey,
                padding: 15, borderRadius: 5
            }}>
                <Text style={{ color: colors.black, fontFamily: 'Lato-Regular', fontSize: 18, }}>Delivery Time</Text>
                <AntDesign name="down" size={25} color={colors.gery} />
            </View>
        </View>
    )
}

export default MoreInfo;