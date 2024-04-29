import { UPDATECATEGORIES, LOGIN, SIGNOUT ,UPDATEPROFILE} from "./constants";

export const login = data => ({
    type : LOGIN,
    payload:{
        UserId: data.UserId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobilenumber: data.mobilenumber,
        profileImage:data.profileImage,
    },
});

export const signout = data => ({
    type : SIGNOUT,
    payload:{},
});


export const updateprofile = data => ({
    type : UPDATEPROFILE,
    payload:{
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobilenumber: data.mobilenumber,
        profileImage:data.profileImage,

    },
});

export const categories = data => ({
    type : UPDATECATEGORIES,
    payload:{
        categories: data,
       

    },
});