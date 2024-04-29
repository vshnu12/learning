import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, buttonText } from "react-native";
import firestor from "@react-native-firebase/firestore"
import { useNavigation } from "@react-navigation/native";
import style from "../../components/common/style";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { validatemobile, validateEmail } from "../SignUp/controller"
import Snackbar from 'react-native-snackbar';
import colors from "../../components/common/colors";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDimensionContext } from "../../context";


const SignUp = () => {
    const dimensions = useDimensionContext();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "153436918427-1pe4ec4ome011d6cn7ut90up4np94thm.apps.googleusercontent.com",
        });
    }, []);




    const handleButtonPress = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    };

    const handleGoToLogin = () => {
        navigation.goBack('');
    };
    const handleSignUp = async () => {
        const trimmedUsername = username.trim();
        const trimmedEmail = email.trim();
        const trimmedMobile = mobile.trim();
        const trimmedPassword = password.trim();
        const trimmedCpassword = cpassword.trim();

        if (!trimmedUsername || !trimmedEmail || !trimmedMobile || !trimmedPassword || !trimmedCpassword) {
            setError('Fill up all the fields to continue');
            return;
        }

        if (!validateEmail(trimmedEmail)) {
            setError('Given email is not valid');
            return;
        }

        if (!validatemobile(trimmedMobile)) {
            setError('Given mobile number is not valid');
            return;
        }

        if (trimmedPassword !== trimmedCpassword) {
            setError('Given passwords are not the same');
            return;
        }

        try {
            const snapshot = await firestor().collection('Users')
                .where('username', '==', trimmedUsername)
                .where('email', '==', trimmedEmail)
                .get();

            if (!snapshot.empty) {
                setError('This email is already existing on our system. Please use another one or go to Login');
                return;
            }

            const userData = {
                username: trimmedUsername,
                email: trimmedEmail,
                mobilenumber: trimmedMobile,
                password: trimmedPassword,
                created: String(new Date()),
                updated: String(new Date()),
            };

            const resp = await firestor().collection('Users').add(userData);
            console.warn(resp);
            Snackbar.show({
                text: 'A new account is created',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
            });
            navigation.navigate("Home");
        } catch (err) {
            console.warn(err);
        }
    };


    return (
        <View style={responsiveStyle.container} >

            <ScrollView style={responsiveStyle.ScrollView} >
                <Image source={require('../../assets/images/VIHElogo2.png')}
                    style={responsiveStyle.logo} />
                <Text style={responsiveStyle.loginText} >SignUp</Text>
                {error !== null ?
                    <View>
                        <Text style={responsiveStyle.errorText}>{error}</Text>
                    </View>
                    : null}
                <CustomTextInput
                    type="username"
                    handleText={text => setUsername(text)}
                    placeholder="UserName"
                />
                <CustomTextInput
                    type="email"
                    handleText={text => setEmail(text)}
                    placeholder="Email Address"
                />
                <CustomTextInput
                    type="phone"
                    handleText={text => setmobile(text)}
                    placeholder="mobilenumber"
                />
                <CustomTextInput
                    type="password"
                    handleText={text => setpassword(text)}
                    placeholder="Password"
                />
                <CustomTextInput
                    type="password"
                    handleText={text => setcpassword(text)}
                    placeholder="Confirm Password"
                />


                <CustomButton
                    type="primary"
                    handleButtonPress={handleSignUp}
                    buttonText={"SIGN UP"}
                />
                <View style={responsiveStyle.dottedLineContainer} >
                    <View style={responsiveStyle.overflow}>
                        <View
                            style={responsiveStyle.dashedline}
                        />
                    </View>
                    <View
                        style={responsiveStyle.textcontainer}>
                        <Text style={responsiveStyle.dashedlinetext}>Or Sign Up With</Text>
                    </View>
                </View>

                <CustomButton
                    type="secondary"
                    handleButtonPress={handleButtonPress}
                    buttonText={"Sign In with Google"}
                    icon={require('../../assets/images/google.png')}
                />


                <Text onPress={handleGoToLogin} style={responsiveStyle.createNew} >Go To Login</Text>
            </ScrollView>
        </View>


    );
};


export default SignUp;