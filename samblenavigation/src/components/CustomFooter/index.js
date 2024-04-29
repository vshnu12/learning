import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import colors from '../common/colors';

const CustomFooter = ({ state, descriptors, navigation }) => {


    const dimensions = useDimensionContext();


    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    return (
        <View
            style={responsiveStyle.containercf} >
            {state.routes.map((route, index) => {
                const isfocused = state.index === index;
                const icon = route.name === 'Home'
                    ? require('../../assets/images/homeicon.png') :
                    route.name === 'Categories'
                        ? require('../../assets/images/2603910.png') :
                        route.name === 'Search'
                            ? require('../../assets/images/searchicon.png') :
                            route.name === 'Offers'
                                ? require('../../assets/images/offericon.png') :
                                //route.name === 'Cart' 
                                require('../../assets/images/1413908.png');
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate(route.name)}
                        style={responsiveStyle.TouchableOpacitycf}  >
                             {isfocused ? <Text style={responsiveStyle.dotcf} >.</Text>: null }
                             {route.name === 'Cart' ? (<View style={responsiveStyle.cfcarttext1}>
                                    <Text style={responsiveStyle.cartcount}>2</Text>
                                     </View>) : null} 
                        <Image source={icon} style={responsiveStyle.imagecf} />
                        <Text style={responsiveStyle.textcf} >{route.name}</Text>
                       
                    </TouchableOpacity>
                );
            })}

        </View>
    );
};

export default CustomFooter;
