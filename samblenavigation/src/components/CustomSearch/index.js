import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import style from "../common/style";
import { useDimensionContext } from "../../context";
import colors from "../common/colors";



const CustomSearch = (props) => {
  const {filter} = {...props};


    const dimensions = useDimensionContext();


    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    return (
      <View style={[ filter ? responsiveStyle.newsearchconatainer : responsiveStyle.searchContainer]}>
        <View style={[filter ? responsiveStyle.newsearchInputContainer :responsiveStyle.searchInputContainer]}>
            <View style={responsiveStyle.innerviewsearch}>
<Image source={require('../../assets/images/searchicon.png')}
         style={responsiveStyle.searchicon}/>
         <TextInput placeholder="Search Here"
         placeholderTextColor={colors.black_level_3}
         style={responsiveStyle.textInput}
         selectionColor={colors.babyBlue}/>
         </View>
         <Image source={require('../../assets/images/623.jpg')}
         style={responsiveStyle.searchicon}/>
    
        </View>
        {filter ?  <Text style={responsiveStyle.filtertext}>Filter</Text>: null}
       
       </View>
    );
  };
export default CustomSearch;