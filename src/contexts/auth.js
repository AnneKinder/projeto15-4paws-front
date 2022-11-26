import React, { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {
    const [token, setToken] = useState({})
    const [addProduct, setAddProduct] = useState([])


return(
    <AuthContext.Provider value={{token, setToken, addProduct, setAddProduct}}>
        {props.children}
    </AuthContext.Provider>
)

}