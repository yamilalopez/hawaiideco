import { Router , Routes , Route } from "react-router";
import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Products from "../pages/Products";
import DetailPage from "../pages/DetailPage";
import Page404 from "../pages/Page404";

const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route exact path="/detail/:id">
            <DetailPage />
          </Route>
          <Route exact path="/categorias/:categorias">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;