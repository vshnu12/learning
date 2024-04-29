import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { useDimensionContext } from "../../context"; 
import style from "../common/style"; 

const CommonHeaderLeft = props => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext(); 
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight); 

    const handlePress = () => {
        if (props.type === 'back')  {
            navigation.goBack();
        } else {
            navigation.toggleDrawer(); 
        }
    };



    return (
        <TouchableOpacity style={{ padding: 15 }} onPress={handlePress}>
            <Image
                source={
                    props.type ==='back'
                    ? require('../../assets/images/3236910.png')
                    : require('../../assets/images/viheicon.jpg')}
                style={responsiveStyle.chleftimage}
            />
        </TouchableOpacity>
    );
};

export default CommonHeaderLeft;
