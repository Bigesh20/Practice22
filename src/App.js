import Shop from "./component/shop/shop.component";
import Navigation from "./component/navigation/navigation.component";
import Home from "./component/home/home.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./component/signIn/signin.component";

const App = () => {
  return(
    <div>
    <Routes>
    <Route path="/" element={<Navigation />}  >
    <Route index element={<Home />}/>
    <Route path="shop" element={<Shop />}/>
    <Route path="sign-in" element={<SignIn />}/>
    </Route>
    </Routes>
    </div>
  
  )
}

export default App;
