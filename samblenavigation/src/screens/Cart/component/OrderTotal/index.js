import React from 'react';
import { Text, View, Image } from 'react-native'; 
import style from '../../../../components/common/style';
import { useDimensionContext } from '../../../../context/index';
import colors from '../../../../components/common/colors';

const OrderTotal = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
 return(
    <View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginVertical:15, borderBottomColor: colors.black_level_2,borderBottomWidth:1,}}>
        <View >
            <Text style={{color:colors.black,fontFamily:'Lato-Black',fontSize:22,lineHeight:50}}>Order Details</Text>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30, }}>Bag Total</Text>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,}}>Bag Saving</Text>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,}}>Coupon Discount</Text>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,marginBottom:15}}>Delivery</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <Text style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginVertical:15}}/>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,}}>₹50.00</Text>
            <Text style={{color:colors.primaryGreen,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,}}>₹0.00</Text>
            <Text style={{color:colors.red,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,}}>Apply Coupon</Text>
            <Text style={{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,marginBottom:15}}>₹50.00</Text>
        </View>
    </View>
    <View style={{
        flexDirection:'row',alignItems:'center',justifyContent:'space-between',
    }}>
    <Text style={{color:colors.black,fontFamily:'Lato-Bold',fontSize:22,lineHeight:50}}>Order Details</Text>
    <Text style={{color:colors.black,fontFamily:'Lato-Bold',fontSize:22,lineHeight:50}}>₹100</Text>
    </View>
    </View>

 );
};

export default OrderTotal;