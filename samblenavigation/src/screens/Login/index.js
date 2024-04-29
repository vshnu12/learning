import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, buttonText } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import style from "../../components/common/style";
import Snackbar from 'react-native-snackbar';
import colors from "../../components/common/colors";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { validateEmail } from "./controller";
import { useDimensionContext } from "../../context";
import { useDispatch } from "react-redux";
import { login } from "../../Storage/action";

const Login = () => {
    const dimensions = useDimensionContext();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const responsiveStyle = style(
        dimensions.windowWwidth,
        dimensions.windowHeight,
    );

    function onAuthStateChanged(user) {
        console.warn('onAuthStateChanged', user)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);


    const handleLogin = async () => {
        if (email.trim() !== '' && password.trim() !== '') {
            if (validateEmail(email.trim())) {
                await firestore()
                    .collection('Users')
                    .where('email', '==', email.trim().toLowerCase())
                    .get()
                    .then(async snapshot => {
                        if (snapshot.empty) {
                            Snackbar.show({
                                text: 'This User is not registered.',
                                duration: Snackbar.LENGTH_LONG,
                                backgroundColor: colors.red,
                                textColor: colors.white,
                            });
                        } else {
                            snapshot.forEach(documentSnapshot => {
                                const respData = documentSnapshot.data();


                                if (password.trim() === respData.password) {
                                    Snackbar.show({
                                        text: "Login Succcessfull.",
                                        duration: Snackbar.LENGTH_LONG,
                                        backgroundColor: colors.primaryGreen,
                                        textColor: colors.white,
                                    });
                                    dispatch(
                                        login({ UserId:documentSnapshot.id,firstName: respData.firstName, lastName: respData.lastName, email: respData.email , mobilenumber:respData.mobilenumber, profileImage:respData.profileImage,}),
                                    );
                                    //navigation.navigate("AppDrawer");
                                } else {
                                    Snackbar.show({
                                        text: 'The password you enter is wrong. ',
                                        duration: Snackbar.LENGTH_LONG,
                                        backgroundColor: colors.red,
                                        textColor: colors.white,
                                    });
                                }
                            });

                        }
                    })
                    .catch(err => console.warn(err));
            } else {
                Snackbar.show({
                    text: 'Enter a valid email',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.red,
                    textColor: colors.white,
                });
            }

        } else {
            Snackbar.show({
                text: 'fill up the fields to continue.',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.red,
                textColor: colors.white,
            });
        }
    };

    const handlegotoSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };
    const handlelogintophone = () => {
        navigation.navigate('Logininphone');
    }
    const handleButtonPress = () => {

    };

    return (
        <View style={responsiveStyle.container} >
            <ScrollView style={responsiveStyle.ScrollView} >
                <Image source={require('../../assets/images/VIHElogo2.png')}
                    style={responsiveStyle.logo} />
                <Text style={responsiveStyle.loginText} >LoginAccount</Text>
                <CustomTextInput
                    type="email"
                    handleText={text => setEmail(text)}
                    placeholder="Email Address"
                />
                <CustomTextInput
                    type="password"
                    handleText={text => setpassword(text)}
                    placeholder="password"
                />

                <CustomButton
                    type="primary"
                    handleButtonPress={handleLogin}
                    buttonText={"SIGN IN"}
                />
                <Text onPress={handlegotoSignUp} style={responsiveStyle.createNew} >If you are new, click here</Text>

                <View style={responsiveStyle.dottedLineContainer} >
                    <View style={responsiveStyle.overflow}>
                        <View
                            style={responsiveStyle.dashedline}
                        />
                    </View>
                    <View
                        style={responsiveStyle.textcontainer}>
                        <Text style={responsiveStyle.dashedlinetext}>Or Login With</Text>
                    </View>
                </View>

                <CustomButton
                    type="secondary"
                    handleButtonPress={handlelogintophone}
                    buttonText={"Sign In with Phone"}
                    icon={require('../../assets/images/phone.png')}
                />
                <CustomButton
                    type="secondary"
                    handleButtonPress={handleButtonPress}
                    buttonText={"Sign In with Google"}
                    icon={require('../../assets/images/google.png')}
                />
            </ScrollView>
            <View style={responsiveStyle.footer}>
                <Text style={responsiveStyle.footerText}>Login in as a Guest</Text>
            </View>
        </View>
    );
};

export default Login;