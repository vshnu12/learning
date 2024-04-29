import React from 'react';
import { ScrollView, View } from 'react-native'; 
import style from '../../components/common/style';
import { useDimensionContext } from '../../context';
import CustomSearch from '../../components/CustomSearch';
import colors from "../../components/common/colors";

const Offers = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);

    return (
        <View>
            <ScrollView
                style={responsiveStyle.categoryscrollview}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
            >
                <CustomSearch />
                <View style={{padding:15}}>
<View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between' }}>
<View >
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red,marginLeft:20}}></View>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red,marginLeft:30}}></View>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red}}></View>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red}}></View>
</View>
<View style={{width: '70%', height:100, backgroundColor: colors.gery,marginRight:60,}}></View>
<View style={{marginLeft: -80/2}}>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red,marginRight:50}}></View>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red}}></View>
<View style={{width:25, height:25, borderRadius: 25/2,backgroundColor: colors.red}}></View>
<View style={{width:25, height:25, borderRadius: 25/2, backgroundColor: colors.red}}></View>
</View>
</View>
</View>
            </ScrollView>
        </View>
    );
};

export default Offers;
