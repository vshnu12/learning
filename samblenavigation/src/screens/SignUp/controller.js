export const validatemobile = mobile => {
    const replacedString = mobile.replace(/\s/g, '');
    console.warn(replacedString);
    return !/[a-zA-Z]/.test(mobile) && !/[^\d\-+]/.test(mobile);

};



export const validateEmail = email => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}