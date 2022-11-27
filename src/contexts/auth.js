import React, { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {
    const [token, setToken] = useState({})
    const [tempCart, setTempCart] = useState([])


return(
    <AuthContext.Provider value={{token, setToken, tempCart, setTempCart}}>
        {props.children}
    </AuthContext.Provider>
)

}