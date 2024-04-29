import { View, Text, TouchableOpacity,Image } from "react-native";
import { useDimensionContext } from "../../context";
import style from "../../components/common/style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CommonHeaderLeft from "../../components/CommonHeaderLeft";
import CommonHeaderRight from "../../components/CommonHeaderRight";
import CustomSearch from "../../components/CustomSearch";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import CommonEmpty from "../../components/CommonEmpty";



const Shop = () => {
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight,dimensions.isPortrait);
    

const route = useRoute();
const {type} = route.params;
const {categories} = useSelector(state => state);
const [selectedCategory, setselectedCategory]= useState(type);
const [Products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = async () => {
        await firestore().collection('Products').get().then((snapshot) => {
            if (!snapshot.empty) {
                const result = [];
                snapshot.docs.forEach(doc => {
                    if (doc.exists) {
                        const responseData = {id: doc.id,...doc?.data() };
                        result.push(responseData);
                        result.push(doc.data());
                    }
                })
                setProducts(result);
                
            }
        })
            .catch(err => {
                console.log(err);
            });
    };

useEffect(() => {
    if(type==='all') {
        setselectedCategory('Shop');
    }
}, [type]);
   
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CommonHeaderLeft type="back"/>,
            headerRight: () => <CommonHeaderRight Cart={true}/>,
            title: selectedCategory === 'all' ? 'Shop' : selectedCategory,
            
        });
    }, [selectedCategory]);

const handlecategories = async item => {
    setselectedCategory(item.name);
    await firestore().collection('Products').where("categoryId", '==', item.id)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            const result = [];
            snapshot.docs.forEach(doc => {
                if (doc.exists) {
                    const responseData = {id: doc.id,...doc?.data() };
                    result.push(responseData);
                }
            })
            setProducts(result.length>0 ? result : []);
        }else{
            setProducts( []);   
        }
    })
        .catch(err => {
            console.log(err);
        });
};


     const handleRenderItem =({item, index}) => {
        return(
            <TouchableOpacity onPress= {() => handlecategories(item)} style={responsiveStyle.shopcate}>
                <Text  style={responsiveStyle.shopcatetext}>{item.name}</Text>
            </TouchableOpacity>
        );
     };

     const emptyComponent = () => {
        return <CommonEmpty title={'No Products Available'}/>;
        console.warn(CommonEmpty);
  };   
     
     const handleProduct = (item) => {
        navigation.navigate('ProductDetails' , { Product:item});
     };

      const handleProductRender = ({item,index}) => {
        return(
<TouchableOpacity onPress={() => handleProduct(item)} style={responsiveStyle.cartproductView}>
                <Image
                    source={{uri: item.image}}
                    style={responsiveStyle.cartproductImage}
                />
                <View style={responsiveStyle.cartnameView}>
                    <Text style={responsiveStyle.cartname} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text style={responsiveStyle.cartdes} numberOfLines={2}>
                        {item.decription}
                    </Text>
                    <View style={responsiveStyle.cartpriceView}>
                        <View style={responsiveStyle.cartpriceView2}>
                            <Text style={responsiveStyle.cartprice}>{item.price}</Text>
                            <View style={responsiveStyle.cartoffView}>
                                <Text style={responsiveStyle.cartoffText}>{item.off}%</Text>
                            </View>
                        </View>
                        <View style={responsiveStyle.cartqunView}>
                            <Text style={responsiveStyle.cartqunText1}>- </Text>
                            <Text style={responsiveStyle.cartqunText2}>0</Text>
                            <Text style={responsiveStyle.cartqunText1}>+</Text>
                        </View>
                    </View>
                </View>
           
            </TouchableOpacity>
        )
      }
      
    return (
        <View>
            <FlatList data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={handleRenderItem}
            style={responsiveStyle.catecate}
            contentContainerStyle={responsiveStyle.shopcontent}
            />
            <CustomSearch filter={true}/>
            <View style={responsiveStyle.shoppadding}>
            <FlatList
  data={Products}
  showsVerticalScrollIndicator={false}
  renderItem={handleProductRender}
  contentContainerStyle={responsiveStyle.shopitems}
  listEmptyComponent={emptyComponent} 
/>
           
           
    </View>
        </View>
    )
}

export default Shop;