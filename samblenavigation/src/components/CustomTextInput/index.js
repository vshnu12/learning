import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import style from "../common/style";
import colors from "../common/colors";
import { useDimensionContext } from "../../context";

const CustomTextInput = (props) => {

   const dimensions = useDimensionContext();

   const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

   const { type, handleText, placeholder  , value} = props;
   const [show, setshow] = useState(false);
   const keyboardType =
      type === 'email'
         ? 'email-address'
         : type === 'password'
            ? 'default'
            :type=== 'phone'  
            ? 'phone-pad' 
            : 'default';
   const secureTextEntry = type === 'password' ? ( show ? false : true) : false; 
   const icon =
      type === 'email'
         ? require('../../assets/images/email.png')
         : type === 'password'
            ? require('../../assets/images/lock.png')
            : false;

   const handlePassword = () => {
      setshow(!show);
   };
   return (
      <View style={responsiveStyle.inputcontainer} >
         <TextInput
            style={responsiveStyle.textInput}
            placeholder={placeholder}
            placeholderTextColor={colors.black_level_2}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            selectionColor={colors.primaryGreen}
            onChangeText={handleText}
            value={value}
         />
         {!icon ? null : (
            <TouchableOpacity
               onPress={handlePassword}
               disabled={type !== 'password' ? true : false}>
               <Image style={responsiveStyle.textInputicon} source={icon} />
            </TouchableOpacity>
         )}
      </View>

   )
};

export default CustomTextInput;
