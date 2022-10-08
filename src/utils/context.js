import {createContext, useState} from "react";

export const CustomContext = createContext();


const Context = (props) => {


    const value = {

    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context