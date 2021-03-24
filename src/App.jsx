import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

//Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";

//Components
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
