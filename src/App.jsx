import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";

//Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";

//Components
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
