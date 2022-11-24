import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './assets/GlobalStyle.js'
// import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.js";
// import Home from "./pages/Home.js";
// import Cart from "./pages/Cart.js";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<SignIn/>} /> */}
        <Route path="/sign-up" element={<SignUp/>} />
        {/* <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
