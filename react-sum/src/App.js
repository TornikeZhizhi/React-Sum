import Header from "./BaceLayout/Header";
import {Route ,Switch ,Redirect} from "react-router-dom"
import Products from "./Components/Producets/Products";
import ProductDetail from "./Components/Producets/ProductDetail";
import Home from "./Home/Home";
import HeaderSwitchContext from "./ContextApi/HeaderSwitcherContext";



// const colorHandler = (event) => {
//   console.log(event.target.checked)
// }

function App() {
  return (
    <div className="App">

        <HeaderSwitchContext>
        <Header></Header>
  
        <Switch>
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
        </HeaderSwitchContext>
        
    </div>
  );
}

export default App;
