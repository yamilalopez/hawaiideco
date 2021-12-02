import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import DetailPage from "../pages/DetailPage";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/detail/:id">
            <DetailPage />
          </Route>
          <Route exact path="/categorias/:categorias">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
