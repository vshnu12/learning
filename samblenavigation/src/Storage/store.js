import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore,persistReducer } from "redux-persist";
import { configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import { SambleNavigationReducer } from "./reducer";


//redux persist config
 const persistConfig={
    key:'SampleNavigation',
    storage:AsyncStorage,
 };
  //middleware:Redux persist persisted reducer

  const persistedReducer=persistReducer(persistConfig,SambleNavigationReducer);

  //redux:store
  const store=configureStore({
    reducer:persistedReducer,
    middleware:getDefaultMiddleware=>
        getDefaultMiddleware({
            immutableCheck:false,
            serializableCheck:false,
        }),
    });

//middleware:Redux persist persister
    let persister=persistStore(store);
    //export
    export{store,persister};