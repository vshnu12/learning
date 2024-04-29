import { Text, View } from "react-native";
import { useDimensionContext } from "../../context";
import style from "../common/style";

 
 
 
const CommonEmpty = ({ title }) => { // Destructure the props
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
      dimensions.windowWidth,
      dimensions.windowHeight,
      dimensions.isPortrait
    );
  
    return (
      <View style={responsiveStyle.emptycontainer}>
        <Text style={responsiveStyle.emptytitle}>{title}</Text> // Display the title
      </View>
    );
  };
  
  export default CommonEmpty;