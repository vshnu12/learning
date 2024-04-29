import { View ,Image} from "react-native"

     




     const Splash= () => {
        return(
            <View style={{ flex:1,}} > 
                <Image source={require('../../assets/images/ViheHDLOGO.png') }
            style={{width:"100%", height:"100%",resizeMode:'contain,'}}
            />
            </View>
        );
     };

     export default Splash;