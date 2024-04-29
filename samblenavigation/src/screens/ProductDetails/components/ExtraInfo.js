import { View, Text } from "react-native";
import { useDimensionContext } from "../../../context";
import style from "../../../components/common/style";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { colors } from "../../../components/common/colors"

const ExtraInfo = props => {

    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight, dimensions.isPortrait);
     
const [curActiveSections, setActiveSections] = useState([])
    const DetailsArray = [
        {
            title:'Manufacture Details',
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            title:"Product Disclaimer ",
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
            title: ' Features & Details',
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        
    ];
     const _renderHeader = (sections) => {
        return 
        <View   style={{flexDirection:'row',alignItems: "center", justifyContent:'space-between',}}>
            <Text style={responsiveStyle.pddescriptionhead}>{sections.title}</Text>
            <AntDesign name="down" size={25} color={colors.gery} />
        </View>;
     };
     const _renderContent = (sections) => {
        return <View>
             <Text style={responsiveStyle.pddescription}>{sections.content}</Text>
        </View>;
     };
     const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
     };



    return (
    <>
      <Accordion
    activeSections={curActiveSections}
    sections={DetailsArray}
    renderHeader={_renderHeader}
    renderContent={_renderContent}
    onChange={_updateSections}
    UnderlayColor={'transparent'}
    sectioncontainerStyle={{paddingVertical:10, borderBottomColor: colors.gery, borderBottomWidth:1,}}
  />
    </>
    );
};

export default ExtraInfo;