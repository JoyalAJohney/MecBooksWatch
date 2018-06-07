import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import SearchPage from "./components/searchPage";
import Auth from "./components/auth";
import Userpage from "./components/Userpage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Credits from "./components/credits";

const App = () => (
  <Provider store={Store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/search" component={SearchPage} />
        <Route path="/productdisplay" component={ProductDisplay} />
        <Route path="/login" component={Auth} />
        <Route path="/user" component={Userpage} />
        <Route path="/credits" component={Credits} />
      </div>
    </Router>
  </Provider>
);

export default App;
