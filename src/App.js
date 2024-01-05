import Shop from "./component/shop/shop.component";
import Navigation from "./component/navigation/navigation.component";
import Home from "./component/home/home.component";
import { Routes, Route } from "react-router-dom";
import Authenticate from "./component/authentication/authenticate.component";
import Checkout from "./component/checkout.component/checkout.component";

const App = () => {
  return(
    <div>
    <Routes>
    <Route path="/" element={<Navigation />}  >
    <Route index element={<Home />}/>
    <Route path="shop" element={<Shop />}/>
    <Route path="auth" element={<Authenticate />}/>
    <Route path="checkout" element= {<Checkout />}/>
    </Route>
    </Routes>
    </div>
  
  )
}

export default App;
