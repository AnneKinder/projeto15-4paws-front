import React, { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {
    const [token, setToken] = useState({})
    const [addProduct, setAddProduct] = useState([])
    const [ user, setUser] = useState({})

return(
    <AuthContext.Provider value={{token, setToken, addProduct, setAddProduct, user, setUser}}>
        {props.children}
    </AuthContext.Provider>
)

}