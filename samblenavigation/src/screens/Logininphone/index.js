import React, { useState } from "react";
import { ScrollView, Text, View, Image, buttonText } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../../components/common/style";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import auth from '@react-native-firebase/auth';
import colors from "../../components/common/colors";
import Snackbar from 'react-native-snackbar';
import { validateOtp, validatemobile } from "./controller";
import { useDimensionContext } from "../../context";

const Logininphone = () => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtpField] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const navigation = useNavigation();
    const dimensions = useDimensionContext();
    const responsiveStyle = style(dimensions.windowWidth, dimensions.windowHeight);

    handleGoToLogin = () => {
        navigation.goBack();
    };

    const handlelogintophone = async () => {
        try {
            setError(null);
            if (validatemobile(phone.trim())) {
                const confirmation = await auth().signInWithPhoneNumber(phone);
                if (confirmation) {
                    Snackbar.show({
                        text: 'The Veifvation Code is Send to your given mobilenumber.',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: colors.lightGreen,
                        textColor: colors.gery,
                    });
                    setConfirm(confirmation);
                    setShowOtpField(true);
                }

            } else {
                setError('Given phone number is incorrect.', error);
            }
        } catch (error) {
            setError('Given phone number is incorrect.', error);
        }
    };

    const handleVerifyOtp = async () => {
        if (otp.trim() !== '' && validateOtp(otp.trim())) {
            const res = await confirm.confirm(otp.trim());
            if (res) {
                Snackbar.show({
                    text: 'Your phone number is verified,Login Successfull.',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.lightGreen,
                    textColor: colors.black,
                });
                navigation.navigate('Home');
            }
        } else {
            setError('enter otp is not valid.');

        }
    };

    return (
        <View style={responsiveStyle.container} >
            <View style={responsiveStyle.fullbg}>

            </View>
            <Image
                source={require("../../assets/images/bg2.png")}
                style={responsiveStyle.topBg} />
            <ScrollView style={[responsiveStyle.ScrollView, responsiveStyle.fullbg]} showsVerticalScrollIndicator={false}>
                <Image source={require('../../assets/images/VIHElogo2.png')} style={responsiveStyle.logo} />
                <Text style={responsiveStyle.loginText}>Login In Phone</Text>
                {error !== null ? <Text style={responsiveStyle.errorText}>{error}</Text> : null}
                <CustomTextInput
                    type="phone"
                    handleText={text => setPhone(text)}
                    placeholder="Phone Number"
                />

                {showOtp ? (
                    <CustomTextInput
                        type="phone"
                        handleText={text => setOtp(text)}
                        placeholder="Enter OTP"
                    />
                ) : null}

                <CustomButton
                    type="primary"
                    handleButtonPress={showOtp ? handleVerifyOtp : handlelogintophone}
                    buttonText={showOtp ? 'Verify OTP' : 'Sign in with Phone'}
                />



                <Text onPress={handleGoToLogin} style={responsiveStyle.createNew} >Go To Login</Text>

            </ScrollView>
        </View>


    );
};


export default Logininphone;