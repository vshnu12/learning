const { StyleSheet } = require("react-native");



 const style= (width,height) =>
  StyleSheet.create({
    searchContainer:{

        justifyContent:'center',
        alignItems:'center',
        marginVertical: 20,
      },
      search:{
        borderWidth:1,
        borderColor: colors.black,
        backgroundColor: colors.CobaltBlue,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:15,
        padding:40,
        width: 20,
        
      },
  })