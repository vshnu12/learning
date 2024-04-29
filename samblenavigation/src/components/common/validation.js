//import React from "react";
//import { ValideEmail } from "react";
//import { Alert } from "react-native";

// email validation
export const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };


 // validation mobile
  export const validateMobile = mobile => {
    const mobileRegex = /^[0-9]{10}$/;
    if (mobileRegex.test(mobile)) {
      return true;
    } else {
      return false;
    }
  };


  





