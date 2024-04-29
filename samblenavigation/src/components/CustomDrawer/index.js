import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import style from '../../components/common/style';
import CommonHeader from '../../components/commonHeader';
import colors from '../common/colors';
import { useDimensionContext } from '../../context';
import Categories from '../../screens/Categories';
import {useNavigation} from '@react-navigation/native'
import { signout } from '../../Storage/action';
import Login from '../../screens/Login';
import { useDispatch, useSelector } from 'react-redux';



const CustomDrawer = () => {
    

    const dimensions = useDimensionContext();


    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
    const navigation= useNavigation();
    const dispatch = useDispatch ();
    const { firstName,lastName, email ,userImage } = useSelector(state => state);
    const Contents = [
        {
            itemId:0,
            itemName:'Home',
            navigateTo: 'Home',
            icon:require('../../assets/images/homedicon.png'),
        },
        {
            itemId:1,
            itemName:'Shop By Categories',
            navigateTo: 'Categories',
            icon:require('../../assets/images/categoryicon.jpg'),
        },
        {
            itemId:2,
            itemName:'Orders',
            navigateTo: 'Orders',
            icon:require('../../assets/images/icon-order.png'),
        },
        {
            itemId:3,
            itemName:'Your WishList',
            navigateTo: 'WishList',
            icon:require('../../assets/images/Wishlist-Icon.png'),
        },
        {
            itemId:4,
            itemName:'Your Account',
            navigateTo: 'Account',
            icon:require('../../assets/images/profile-icon.png'),
        },
    ];


 const handlesignout =() => {
   dispatch(signout());
 };

    return (
        <ScrollView >
            <View style={{ marginVertical: 20, padding: 15, overflow: 'hidden' }}>
                {/*Profile*/}
                <View style={responsiveStyle.prifilecd}>
                    <View style={responsiveStyle.profilecdstyle}>
                    <Image
                        style={responsiveStyle.cdimage}
                        source={
                            userImage === ''
                                ? profileImage === ''
                                    ? require('../../assets/images/2919906.png')
                                    : { uri: profileImage }
                                : { uri: userImage }
                        }
                    />
                    </View>
                    <View style={{ marginLeft: 15, width: "70%" }}>
                        <Text style={{ color: colors.black, fontFamily: "Lato-Bold",fontSize:20 }}>{firstName}{lastName}</Text>
                        <Text style={{ color: colors.black }} >{email}</Text>
                    </View>
                </View>
                {/*Contents*/}
                <View style={{ marginVertical: 20 }} >
                    <View >
                        {Contents.map((item,index) =>{
                            return(
                                <TouchableOpacity
                                key={item.itemId}
                                onPress={() => navigation.navigate(item.navigateTo)}
                                style={responsiveStyle.contentcdstyle}>
                                <View
                                    style={responsiveStyle.viwestylecd}
                                >
                                    <Image
                                        source={item.icon}
                                        style={responsiveStyle.image1cd} />
                                    <Text style={responsiveStyle.textcd}>{item.itemName}</Text>
                                </View>
                                <Image
                                    source={require('../../assets/images/arrow-rightcd.png')}
                                    style={responsiveStyle.image2cd} />
                            </TouchableOpacity>

                            );
                        })}
                       </View>
                    </View>
                       
                        
      
                {/*LogOut*/}
            
                    <TouchableOpacity onPress={handlesignout}
                        style={responsiveStyle.logoutstylecd} >
                            <Image 
                            source={require('../../assets/images/arrow-rightcd.png')}
                            style={responsiveStyle.image2cd}/>
                        <Text style={responsiveStyle.logouttextcd} >Sign Out</Text>
                    </TouchableOpacity>
            {/*contact support*/}
            <View style={responsiveStyle.supportView} >
                <Text  style={responsiveStyle.contacthead }>Contact Support</Text>
                <Text style={{color:colors.gery}}>If you have any problem with the app, feel free to contact our 24 hours support system</Text>
                <View style={responsiveStyle.contactstylecd} >
                        
                        <Text style={responsiveStyle.contacttextcd} >Contact</Text>
                    </View>
            </View>

            </View>
        </ScrollView>
    );
};

export default CustomDrawer;
