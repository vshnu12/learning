import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors";
import { color } from "react-native-elements/dist/helpers";

const  {width, height} = Dimensions.get('screen')


  //Login
 const style  = (width, height,isPortrait) => StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#0890A4'
  },
  topBg: {
    width: width,
    height: height * 0.2,
    resizeMode: "cover",
  },
  ScrollView: {
    backgroundColor: '#021d31',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 100,
  },
  logo: {
    width: 100,
    height: 150,
    resizeMode: "center",
    alignItems: "center",
    justifyContent: 'center',
  },
  loginText: {
    textAlign: "center",
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.gery,
  },
  createNew: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.steel,
    textAlign: 'center',
    marginVertical: 1,
  },
  footer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.CobaltBlue,
    marginBottom: 0,
  },
  footerText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.black,
  },
  dottedLineContainer: { marginVertical: 15 },
  overflow: { overflow: 'hidden' },
  dashedline: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.black,
    margin: -2,
    marginBottom: 0,
  },

  textcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -8,
    backgroundColor: '#021d31',
    width: 110,

  },
  dashedlinetext: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    flexWrap: 'wrap-reverse',
  },
  //custom button
  button: {
    padding: width * 0.02,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: width * 0.025,
    flexDirection: "row",
  },
  icon: {
    width: width * 0.1,
    height: width * 0.10,
    marginRight: width * 0.025,
    marginBottom: width * 0,
  },
  //custom input
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    padding: width * 0.015,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: colors.gery,
    marginHorizontal: 10,
    
  },
  textInput: {
    color: colors.black,
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    alignItems: 'flex-start',
    color:colors.black_level_2,
  },
  textInputicon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: "contain",
  },
  //signup
  errorText: {
    color: colors.red,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  sidebar: {
    marginRight: 10,
  },
  logoch: {
    resizeMode: 'contain',
    height: 55,
    width: 50,
    marginLeft: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  containerch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:  isPortrait ? 20 : 15,
    //width: width*0.12,
    height: 70,
    backgroundColor: colors.azureBlue,
    paddingHorizontal: 20,
  },
  containerhome: {
    //marginTop: 20,
    //flexDirection: 'column',
    height: height,
   // alignItems:'flex-start',
   /* flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    height: 70,
    backgroundColor: colors.white,
    paddingHorizontal: 15,*/
    backgroundColor:colors.white,
   
  },
  mainhome:{
    flex:4,
  },
  sideiconch: {
    resizeMode: 'center',
    height: 50,
    width: 50,
    marginRight: 20,
    alignItems:'flex-start',
  },
  //CustomFooter
  containercf: {
    height: 95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.GlaucousBlue,
  },
  TouchableOpacitycf: 
  { justifyContent: 'center',
   alignItems: 'center', 
  },
  textcf:
  { color: colors.black,
     fontFamily: "Lato-Regular", 
  fontSize: 15, 
},
imagecf:
{ width: 50, 
  height: 30, 
  resizeMode: 'contain' 
},
dotcf : {
  color:colors.white,
   //width:50,
   fontSize: 70,
   textAlign:'center',
   marginTop: -55,
  },
    cfcarttext1:{
    //color:colors.black,
    position:'absolute',
    top: -10,
  paddingHorizontal:6,
  paddingVertical:2,
    backgroundColor:colors.blue,
    right:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden',
    zIndex:9
  },
  cartcount:{
    fontFamily:'Lato-Bold',
    fontSize:14,
    color:colors.white
  },
  // customDrawer
  cdimage:{
    width: width * 0.4,
      height: width * 0.4,
      borderRadius: width * 0.2,

  },

  prifilecd:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black_level_2,
    paddingVertical: 20,
},
profilecdstyle:{
  width: 75,
  height: 75,
  borderRadius: 75,
  backgroundColor: colors.GlaucousBlue,
  justifyContent: 'center',
  alignItems: 'center',
},
contentcdstyle:{
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  justifyContent: 'space-between',
},
image1cd:{
  width: 25,
  height: 30,
  resizeMode: 'contain',
  marginRight: 10,
},
textcd:{ color: colors.black,
   fontFamily: "Lato-Bold",
    fontSize:18,
   },
   image2cd:{ width: 25, 
    height: 25,
     resizeMode: 'contain',
      backgroundColor: colors.steel,
       overflow:'hidden', 
        borderRadius: 25/2
       },
       viwestylecd: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutstylecd:{
      borderColor: colors.iron,
      borderWidth: 1,
      paddingHorizontal: 16,
      paddingVertical: 9,
      backgroundColor: colors.azureBlue,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      borderRadius:20,
      flexDirection:'row',
      justifyContent:'space-between',

  },
logouttextcd:{ color: colors.black,
   fontFamily: "Lato-Bold", 
   fontSize: 20,
  
  },
 supportView:{
  borderRadius:20,
  backgroundColor:colors.azureBlue,
  padding:20,
  marginVertical:15,
 },
 contactstylecd:     { 
  borderColor: colors.iron,
 borderWidth: 1,
 paddingHorizontal: 15,
 paddingVertical: 10,
 backgroundColor: colors.lightGreen,
 borderRadius: 10,
 alignItems: 'center',
 justifyContent: 'center',
 width: '50%',
 borderRadius:20,
 flexDirection:'row',
 justifyContent:'space-between',
 margin:5,
},
contacttextcd:{
   color: colors.white, 
  fontFamily: "Lato-Regular", 
  fontSize: 20, 
},
contacthead:{
  fontFamily:"Lato-Bold",
  fontSize: 20, 
  color: colors.red,
  margin:5,
},
searchContainer: {
  
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 15,
  height:40
  //backgroundColor:colors.red,
  //borderWidth:15,
},
newsearchconatainer:{
  flexDirection:'row',
justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 15,
  height:40},
  filtertext:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    marginLeft:10,
    color: colors.black,
   // alignItems:'center',
    //justifyContent:'center',
    marginRight:10,
 textAlign:'center',
 },
searchInputContainer: {
  flex:2,
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors.gery,
  backgroundColor:colors.azureBlue,
  borderRadius: 10,
  paddingHorizontal: 5,
  width: width * 0.9,
  justifyContent:'space-between',

},
newsearchInputContainer: {
  flex:3,
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors.gery,
  backgroundColor:colors.azureBlue,
  borderRadius: 10,
  paddingHorizontal: 5,
  width: width * 0.9,
  justifyContent:'space-between',
  marginLeft:5,

},
searchicon:{
  width:25,
  height:25,
  resizeMode:'contain',  
},
textInput:{
  fontFamily: 'Lato-Regular',
  fontSize: 18,
  marginLeft:15,
  color: colors.black,
},
innerviewsearch:{
flexDirection:'row',
alignItems:'center',


},

/*searchInput: {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 12,
},
searchButton: {
  backgroundColor: 'blue',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 10,
  marginLeft: 10,
},
searchButtonText: {
  color: 'white',
  fontWeight: 'bold',
},*/

//BANNER
 banner: {
  width: width * 0.91,
  height: width * 0.4,
  resizeMode: 'contain',
  borderRadius: 15,
  overflow: 'hidden',
  margin: 15,
},
innerView: {
  padding: 15,
  flex:1,
  alignItems:'flex-end',
  borderColor:colors.aquaBlue
},
head: {
  fontFamily: 'Lato-Black',
  fontSize: 20,
  color:colors.black,
},
content: {
  fontFamily: 'Lato-Regular',
  fontSize: 18,
  color:colors.shadow,
},
touch: {
  backgroundColor: colors.primaryGreen,
  padding: 10,
  width: width * 0.3,
  marginVertical: 10,
  borderRadius: 15,
  justifyContent:'center',
  alignItems:'center',
},
touchText: {
  fontFamily: 'Lato-Regular',
  fontSize: 16,
  color: colors.white,
},
rbcontent:{
  backgroundColor: colors.white,
  paddingR:20,
  marginRight:10,
  borderRadius:15,
  width:80,
  height:90,
  alignItems:'center',
  justifyContent:'center',
  resizeMode:'center',
 
},
rbimage:{
  width: 50,
  height:100,
  resizeMode:'center',
},
rbhead:{
  fontFamily: 'Lato-Bold',
  fontSize:18,
  marginBottom:10,
  color:colors.black,
  marginTop:5,
},
rbconatainer: {
  backgroundColor:colors.azureBlue,
borderRadius:15,
margin:10,
padding:30,
},
containersc: {
  margin:15,
},
schead:
{
  fontVariant:'Lato-Bold',
  fontSize:16,
  textAlign:'center',
  color:colors.black,
},
sccontent:{
  //backgroundColor:colors.shadow,
  paddingR:10,
  marginBottom:10,
  borderRadius:15,
  //width:80,
  //height:90,
  alignItems:'center',
  justifyContent:'center',
  resizeMode:'center',
},
scimage:{
  width: 70,
  height: 65,
  resizeMode:'contain',
},
namesc:{
  fontFamily:'Lato-Bold',
  fontSize:10,
  color:colors.black,
  textAlign:'center',
},
scinnerview:{
  //marginRight:10,
  //marginBottom:15,
  
  padding:5,
  
},
scFlatList:{
  marginVertical:15,
  justifyContent:'center',
  alignItems:'center',
},
pscontent:{
 marginHorizontal:15,
marginBottom: 15,
},
opcontent:{
 padding:15,
 backgroundColor:colors.skyBlue,
 },

pscontainer:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:15,
},
pstext1:{
  fontFamily:'Lato-Bold',
  fontSize:20,
  color:colors.black,
},
pstext2:{
  fontFamily:'Lato-Regular',
  fontSize:18,
  color:colors.black,
},
pstext3:{
  fontFamily:'Lato-Regular',
  fontSize:18,
  color:colors.black,
  textAlign:'left',
  //alignContent:'flex-end',
 // alignItems:'flex-end',

},
opstyle:{
  width:'100%',
padding:15,
marginRight:15,
 marginVertical:15,
  borderRadius:20,
flexDirection:'row',
alignItems:'center',
 backgroundColor:colors.white,
  overflow:'hidden',
},
opimage:{ 
  width: 70,
   height: 70,
    resizeMode: 'contain' ,
    alignSelf:'center',
  },

  opview: {borderLeftWidth:1, 
    paddingHorizontal:15,
    marginLeft:10,
  },

  optext1:{color:colors.black,fontFamily:'Lato-Black',fontSize:20,},
  optext2:{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,},
oppricetext:{ flexDirection: 'row',  justifyContent: 'space-between', marginTop:15, },
optext3:{color:colors.black,fontFamily:'Lato-Regular',fontSize:18,},
optext4:{
  color:colors.white,
  fontFamily:'Lato-Bold',
  marginHorizontal:10,
  
},
opview1:{
  backgroundColor:colors.GlaucousBlue,
  borderRadius:15,
  padding:5,
  alignItems: 'center',
  justifyContent:'center',

},
opview2:{
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'flex-end',
  borderRadius:15,
  borderWidth:1,
  borderColor:colors.skyBlue,
  overflow:'hidden',
  padding :5,
 

},

optext5:{
  fontFamily:'Lato-Bold',
  fontSize: 16,
  color:colors.black,
  marginHorizontal:5,
},
optext6:{
  fontFamily:'Lato-Bold',
  fontSize: 18,
  color:colors.blue,
  marginHorizontal:10,
},
optext7:{
  fontFamily:'Lato-Bold',
  fontSize: 16,
  color:colors.black,
  marginHorizontal:5,
},
hometext1:{
  fontFamily:'Lato-Bold',
  fontSize:25,
  color:colors.gery,
  padding:15,
},
homeview1:{
  padding:15,
  backgroundColor:colors.GlaucousBlue,
  width:'50%',
  margin:15,
  alignItems: 'center',
  justifyContent:'center',
},
hometext2:{
  fontFamily:'Lato-Bold',
  fontSize:16,
  color:colors.white,
},
categoryscrollview: {
  //marginTop: 20,
  //flexDirection: 'column',
  height: height,
 // alignItems:'flex-start',
 /* flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
  height: 70,
  backgroundColor: colors.white,
  paddingHorizontal: 15,*/
  backgroundColor:colors.white_level_1,
 
},
catimage:{
  width: 70,
  height: 65,
  resizeMode:'contain',
  margin:10,
},
catflatlist:{
  padding:10,
  backgroundColor:colors.white,
  width:85,
  alignItems:'center',
  justifyContent:'center',
},
cattouch:{
  borderBottomColor: colors.shadow,
  borderBottomWidth:0.9,
},
catmain:{
  flex:1,
},
caterowstyle:{
  flexDirection:'row',
  justifyContent:'space-between',

},
catbackimage:{
  width:width*0.65,
  height:height* 0.175,
  resizeMode: 'contain',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:15,
  overflow:'hidden',
},
catename: {
  color: colors.black,
  fontFamily:'Lato-Black',
fontSize:22, },
catdescription:{
  fontFamily:'Lato-Regular',
  fontSize:20,
  color:colors.gery
},
trendingmain:{
 flex:1,
  padding:15,
},
trendingflatlist:{
alignItems:'center',
//marginVertical:20,
},

trendingtitle:{
fontFamily:'Lato-Bold',
fontSize:18,
color:colors.shadow,
},
terndingviewimage:{
padding:15,
borderRadius:15,
overflow:'hidden',
marginRight:10,
},
trendingimages:{
  width: width*0.15,
  height: height*0.07,
  resizeMode:'contain',
},
cartcontainer:{
  flex:1,
  padding:15,
  backgroundColor: colors.azureBlue,

},
cartproductView:{
  width:"100%",
  padding:15,
  marginRight:15,
  marginVertical: 15,
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.white,
  overflow:'hidden',
},
cartproductImage:{
  width:75,
  height:75,
  resizeMode:'contain',
  alignSelf:'center',
  marginVertical:10,
},
cartnameView:{
  borderLeftWidth:1,
  paddingHorizontal:10,
  marginLeft:10,
},
cartname:{
  fontFamily: 'Lato-Bold',
  fontSize:20,
  color:colors.black,
},
cartdes:{
  fontFamily: 'Lato-Regular',
  fontSize:18,
  color:colors.black,
},
cartpriceView:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginTop:10,

},
cartpriceView2:{
  flexDirection:'row',
  alignItems:'center',
},
cartprice:{
  fontFamily:'Lato-Bold',
  fontSize:18,
  color:colors.black,
},
cartoffView:{
  padding:5,
  borderRadius:30,
  marginHorizontal:10,
  borderWidth:1,
  backgroundColor:colors.primaryGreen,
  borderColor:colors.primaryGreen,
},
cartoffText:{
  fontFamily:"Lato-Bold",
  fontSize:16,
  color:colors.white,
  marginHorizontal:10,

},
cartqunView:{
  flexDirection:'row',
  alignItems:'contain',
  justifyContent:"flex-end",
  borderRadius:15,
  borderWidth:1,
  borderColor: colors.babyBlue,
  overflow: 'hidden',
  paddingVertical:5,
  alignSelf:'center',


},
cartqunText1:{
  fontFamily: 'Lato-Bold',
  fontSize:20,
  color: colors.black,
  marginHorizontal:10,
},
cartqunText2:{
  fontFamily:'Lato-Bold',
  fontSize:18,
  color:colors.blue,
  marginHorizontal:5,
},
offerContainer: {
  padding: 10,
  borderWidth:10
},
offerRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
},
offerRowItem: {
  //marginRight: -50,
},

offerRowItemCenter: {
  width: '95%',
  height: 100,
  backgroundColor: colors.gery,
},
redBox: {
  width: 25,
  height: 25,
  borderRadius: 25 / 2,
  backgroundColor: colors.red,
},
whiteBox: {
  width: 25,
  height: 25,
  borderRadius: 25 / 2,
  backgroundColor: colors.red,
},
commonButtonconatainer:{
  borderRadius:15,
  backgroundColor:colors.primaryGreen,
  padding:15,
  width: width*0.9,
  justifyContent:'center',
  alignItems:'center',
  marginVertical: 15,
},
commonbuttontext: {
  color:colors.white,
  fontFamily:'Lato-Bold',
  fontSize:22,
},
whislistimage:{
  width:35,
  height:35,
  resizeMode: 'contain',
  marginRight:15,
},
wishtlistcontainer:{
  flex:1,
  padding:15,
},
wishlistproductview:{
  alignSelf:'center',
  backgroundColor:colors.azureBlue,
  borderRadius:15,
  overflow: 'hidden',
  flexDirection:'row',
  alignItems: 'center',
  width: width*0.9,
  padding:15,
  marginTop:15,
},
whishlistproductimage:{
  width:90,
  height:90,
  resizeMode: 'contain',
  //marginRight:15,
},
wishlistsecondview:{
  borderLeftColor:colors.gery,
  borderLeftWidth:1,
  paddingLeft:10,
  marginLeft:10,
  color:colors.black
},
wishlisttitle:{
  fontFamily:'Lato-Bold',
  fontSize:18,
  color:colors.black,
},
wishlistdesc:{
  fontFamily:'Lato-Regular',
  fontSize:16,
  color:colors.black_level_3,
},
wishlistbottomview:{
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical:5,
},
wishlistoffview:{
 borderRadius:15,
 backgroundColor: colors.primaryGreen,
 padding:5,
 marginHorizontal:5,
},
wishlistofftext:{
  fontFamily:'Lato-Regular',
  fontSize:12,
  color:colors.white,
},
wishlistcartview:{
  borderRadius:15,
  borderColor: colors.aquaBlue,
  borderWidth:1,
  padding:5,
  marginHorizontal:5,
},
wishlistcarttext:{
  fontFamily:'Lato-Regular',
  fontSize:12,
  color:colors.aquaBlue,
 
},
whishlistremove:{
  //marginLeft:4,
  width:20,
  height:20,
  resizeMode:'contain',
},
whishlistremoveview:{
  position:'absolute',
  top:-25,
  right:0,
  backgroundColor:colors.red,
  borderRadius:15,
  overflow:'hidden',
  padding:5
},
wishlistprice:{
  fontFamily:'Lato-Bold',
  fontSize:14,
  color:colors.primaryGreen
},
wishlistcarttext1:{
  //color:colors.black,
  position:'absolute',
  top: -10,
paddingHorizontal:6,
paddingVertical:2,
  backgroundColor:colors.blue,
  right:10,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  overflow:'hidden',
  zIndex:9
},
wishlistcount:{
  fontFamily:'Lato-Bold',
  fontSize:14,
  color:colors.white
},

chleftimage:{ width: 40, height: 50, resizeMode: 'contain', marginLeft: 9 },

accountcontainer:{
  flex:1,
  //backgroundColor: color.white_level_2,
  padding:15,
},
accounthead: {
  fontFamily: 'Lato-Bold',fontSize:25,textAlign:'center', color:colors.black,

},
accountuserimage: {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 20,
  position: 'relative', 
},
accountimage:{
  width: width * 0.4,
  height: width*0.4,
  borderRadius: width*0.2,
  //position:'relative',
},
accountedit: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
 //position: 'absolute', 
  //right: 10,
  //bottom: 10,
  //left:0,
  //zIndex: 50,
},
edittouch:{
position:'absolute',
left:0,
bottom:0,
},
accountbigimage:{
width: width,
height: 40,
alignItems:"flex-end"
},
accountbigimage1:{
  borderRadius:1,
  alignItems:"center"
  },
  accountbigimage2:{
    position:"absolute",
    zIndex:9,
    right:-15,
    top:-15
    },
largeImage:{
  width: 400,
  height: 400,
  //marginVertical:-200,
  alignItems:"center",
  borderRadius:200,
  marginVertical:150,
  },
accountmodelback:{
  flex:1,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  alignItems:"center",
  
},
accountcloseicon:{
  width: 40,
  height: 40,

  //alignItems:'center',
},
accountcloseicon2:{
  width: 40,
  height: 40,

  //alignItems:'center',
},
accountselectionbox:{
 backgroundColor:colors.white,
  padding:20,
  borderRadius:15,
  justifyContent:'space-around',
  alignItems:'center',
  flexDirection:'row',
 
  marginVertical:width*0.8,
}, 
accounttouch:{
  padding:15,
  justifyContent: 'center',
  backgroundColor: colors.GlaucousBlue,
  borderRadius: 15,
  marginHorizontal:10
},
accountpicktext:{ 
   color: colors.black ,
   fontFamily:'Lato-Regular',
   fontSize:18,
  },
  chrcartcount:{
    //color:colors.black,
    position:'absolute',
    top: 10,
  paddingHorizontal:6,
  paddingVertical:2,
    backgroundColor:colors.blue,
    right:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden',
    zIndex:9
  },
  shopcate:{
    margin:10,
    
  },
  shopcatetext:{
    color:colors.CobaltBlue,
    fontFamily:'Lato-Regular',
    fontSize:18,
  },
  catecate:{
    backgroundColor:colors.babyBlue,
  },
  shoppadding: {
    padding:5,
  },
  shopcontent:{
    justifyContent:'space-around',
    alignItems:'center',
  },
  emptycontainer:{
    flex:1,
    borderRadius:10,
    borderColor: colors.red,
    borderWidth:1,
  },
  emptytitle:{
    fontFamily:'Lato-Regular',
    fontSize:50,
    color:colors.red,
  },
  chrflex:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    
  },
  pdproductimage:{
    width: width,
    height: width *0.5,
    resizeMode:'center',
  },
  heart:{
    position:'absolute',
    right:0,
    marginTop:10,
  },
  pdmainview:{
    backgroundColor:colors.white,
    padding:width*0.03,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowColor: '#000',
    shadowOffset:{width:2, height:4},
    shadowOpacity:0.2,
    shadowRadius:5,
    elevation:15,

  }
});


export default style;