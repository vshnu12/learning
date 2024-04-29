import React, { useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login";
import SingUp from "../SignUp";
import Logininphone from "../Logininphone";
import Home from "../home";
import { DimensionContextProvider, useDimensionContext } from "../../context";
import Categories from "../Categories";
import CustomDrawer from "../../components/CustomDrawer";
import CustomFooter from "../../components/CustomFooter";
import Cart from "../Cart";
import Offers from "../Offer";
import Search from "../Search";
import Orders from "../Orders";
import WishList from "../WishList";
import Account from "../Account";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../../components/common/colors";
import style from "../../components/common/style";
import { Provider, useSelector } from "react-redux";
import { store } from "../../Storage/store";
import { useEffect } from "react";
import SignUp from "../SignUp";
import Splash from "../SplashScreen";
import Shop from "../Shop";
import ProductDetails from "../ProductDetails";




const Drawer = createDrawerNavigator();
const AppDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="MyFooter"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{

        headerTitleAlign: 'left',
        headerTitleStyle: { fontFamily: 'Lato-Bold', fontSize: 22 },
            headerStyle: {
             height: 60,
         },
      }}
    >
      <Drawer.Screen name="MyFooter" component={AppFooter} options={{ headerShown: false }} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="WishList" component={WishList} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Shop" component={Shop}/>
      <Drawer.Screen name="ProductDetails" component={ProductDetails}/>
    </Drawer.Navigator>
  );
};


const Footer = createBottomTabNavigator();
const AppFooter = (props) => {
  const navigation = useNavigation();
  return (
    <Footer.Navigator
      tabBar={(props) => <CustomFooter {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: { fontFamily: 'Lato-Bold', fontSize: 22 },
      }}
    >
      <Footer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Footer.Screen name="Categories" component={Categories} />
      <Footer.Screen name="Search" component={Search} />
      <Footer.Screen name="Offers" component={Offers} />
      <Footer.Screen name="Cart" component={Cart} />
    </Footer.Navigator>
  );
};




const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector(state => state);

  useEffect(() => {
    setTimeout ( () => {
      setLoading(false);
    } ,1000);
    
  }, [isLoggedIn]);

  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {loading ? (
            <AppStack.Screen name="Splash" component={Splash} />
          ) : (
            <>
              {isLoggedIn ? (
                <AppStack.Screen name="AppDrawer" component={AppDrawer} />
              ) : (
                <>
                  <AppStack.Screen name="Login" component={Login} />
                  <AppStack.Screen name="SignUp" component={SignUp} />
                  <AppStack.Screen name="Logininphone" component={Logininphone} />
                </>
              )}
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
};
const App = () => {
  return (
    <Provider store={store} ><AppNavigation /></Provider>
  );
};


export default App;