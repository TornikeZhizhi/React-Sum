import Header from "./BaceLayout/Header";
import {Route ,Switch ,Redirect} from "react-router-dom"
import Products from "./Components/Producets/Products";
import ProductDetail from "./Components/Producets/ProductDetail";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">

        <Header></Header>
        
        <Switch>
          {/* <Route to="/" exact>
            <Redirect to="/products">
          </Route> */}
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:id">
            <ProductDetail></ProductDetail>
          </Route>
          <Route to="/" exact>
            <Home></Home>
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
