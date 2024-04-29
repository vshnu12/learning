import { View, Text } from "react-native";
import { useDimensionContext } from "../../context";
import style from "../common/style";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommonButton = (props) => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);
    return(
    <TouchableOpacity style={responsiveStyle.commonButtonconatainer}>
       <Text  style={responsiveStyle.commonbuttontext}>{props.buttonText} </Text> 
    </TouchableOpacity>
    );
};


export default CommonButton;