import Header from "./BaceLayout/Header";
import {Route ,Switch ,Redirect} from "react-router-dom"
import Products from "./Components/Producets/Products";
import ProductDetail from "./Components/Producets/ProductDetail";
import Home from "./Home/Home";
import HeaderSwitchContext from "./ContextApi/HeaderSwitcherContext";
import ProductsContext from "./ContextApi/ProductsContext";
import ResourcesMain from "./Components/Resources/ResourcesMain";
import ToastsMain from "./Components/Toasts/ToatsMain";
import ToastsContext from "./Components/Toasts/ToastContext";


// const colorHandler = (event) => {
//   console.log(event.target.checked)
// }

function App() {
  return (
    <div className="App">

      <ToastsContext>
        <HeaderSwitchContext>
          <ProductsContext>

          <Header></Header>
    
          <Switch>
            <Route path="/toast" exact>
              <ToastsMain></ToastsMain>
            </Route>
            <Route path="/resource" exact>
              <ResourcesMain></ResourcesMain>
            </Route>
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
          </ProductsContext>
        </HeaderSwitchContext>
        </ToastsContext>
        
    </div>
  );
}

export default App;
