import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState({});
  const [addProduct, setAddProduct] = useState([]);
  const [user, setUser] = useState({});
  const [tempCart, setTempCart] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        addProduct,
        setAddProduct,
        user,
        setUser,
        tempCart,
        setTempCart,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
