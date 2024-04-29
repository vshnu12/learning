import { View,Text, FlatList, Image,TouchableOpacity } from "react-native";
import { useDimensionContext } from "../../../../context";
import style from "../../../../components/common/style";
import Categories from "../../../Categories";
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import colors from "../../../../components/common/colors";
import { useDispatch } from "react-redux";
import { categories } from "../../../../Storage/action";



const ShopCategory = ()  => {
    
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);
   
   const [Categories, setcategories] = useState([]);
   const dispatch = useDispatch();
   
   
    useEffect(() =>{
        getcategory();
     }, []);
 
 
    const getcategory = async ()=> {
         await firestore().collection('category').get().then((snapshot) =>{
           if (!snapshot.empty){
             const result =[];
               snapshot.docs.forEach(doc => {
               if(doc.exists){
                const responseData = {id: doc.id,...doc?.data()};
               result.push(responseData);
               }
             })
             setcategories(result);
             dispatch(categories( result));
           }
         })
         .catch(err => {
           console.log(err);
         });
       };
   
    return(
    <View style={responsiveStyle.containersc} >
        <Text style={responsiveStyle.schead }>
            Shop By Category
        </Text>
    <FlatList
   data={Categories}
    numColumns={4}
    contentContainerStyle={responsiveStyle.scFlatList}
    keyExtractor = {({item, index}) => String(index)}
   renderItem={({item, index}) => {
    const Categoriescolor = 
     index % 4 === 0
     ? colors.Category1
     : index % 4 ===1
     ? colors.Category2
     : index % 4 ===2
     ? colors.Category3
     : index % 4 ===3
     ? colors.Category4
     : colors.Category1;
       return(
        <View style={[responsiveStyle.scinnerview, {backgroundColor:Categoriescolor}]} >
             <TouchableOpacity>
             <View  style={responsiveStyle.sccontent}> 
            <Image source={{uri:item.image}}  style={responsiveStyle.scimage} />
        </View>
        </TouchableOpacity>
        <Text style={responsiveStyle.namesc} >{item.name}</Text>
      
       </View>
       );
    }}
        />
    </View>
    );
};



export default ShopCategory;