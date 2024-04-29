import { UPDATECATEGORIES, LOGIN , SIGNOUT, UPDATEPROFILE} from "./constants";

const initialState = {
    isLoggedIn: false,
    UserId:'',
    firstName: '',
    lastName: '',
    email: '',
    mobilenumber:'',
    profileImage:'',
    categories:'',
};
export const SambleNavigationReducer = (state = initialState,action) => {
     

    switch (action.type) {
        case LOGIN:
            
            return {
                ...state,
                userId: action.payload. UserId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email:action.payload. email,
                mobileNumber: action.payload.mobilenumber,
                profileImage:action.payload.profileImage,
                isLoggedIn: true,
                
            };
            case SIGNOUT:
                
                return {
                    ...state,
                    UserId: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobilenumber:'',
                    profileImage:'',
                    isLoggedIn: false,
                    
                };
        case UPDATEPROFILE:
               return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                mobileNumber: action.payload.mobilenumber,
                profileImage:action.payload.profileImage,
                
            };

            case UPDATECATEGORIES:
               return {
                ...state,
                categories: action.payload.categories,
                
            }; 
             default:
                return state;
        }  
    
};