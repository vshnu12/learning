export const validatemobile = phone => {
    const replacedString = phone.replace(/\s/g, '');
    console.warn(replacedString);
    return !/[a-zA-Z]/.test(phone) && !/[^\d\-+]/.test(phone);

};

export const validateOtp = otp => {
    return !/[1@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(otp);
};