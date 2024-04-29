import { View,Text, FlatList, Image } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from "../../../../components/common/style";



const RecentBought = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    const recentItems =[
        {id:0, image: require('../../../../assets/images/frt.png')},
        {id:0, image: require('../../../../assets/images/frt.png')},
        {id:0, image: require('../../../../assets/images/frt.png')},
        {id:0, image: require('../../../../assets/images/frt.png')},
        {id:0, image: require('../../../../assets/images/frt.png')},
    ];
    return (
        <View style={responsiveStyle.rbconatainer}>
            <Text style={responsiveStyle.rbhead} >
                Buy from Recently Bought
            </Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recentItems}
            keyExtractor = {({item, index}) => String(index)}
            renderItem={({item,index}) => {
                return(
                    <View style={responsiveStyle.rbcontent} >
                        <Image source={item.image} style={responsiveStyle.rbimage}/>
                        </View>
                );
            }}
            />
        </View>
    ) ;
};

export default RecentBought;