import React from "react";
import { Image, Text, TouchableOpacity, View, } from "react-native";
import style from "../common/style";
import {useNavigation} from '@react-navigation/native';
import { useDimensionContext } from "../../context";

const CommonHeader = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();


    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);

   return (
      <View style={responsiveStyle.containerch}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer() }>
          <Image
            source={require('../../assets/images/viheicon.jpg')}
            style={responsiveStyle.sideiconch}
/>
</TouchableOpacity>
         <Image
            source={require('../../assets/images/VIHElogo2.png')}
            style={responsiveStyle.logoch}
         />
      </View>
   );
};

export default CommonHeader;