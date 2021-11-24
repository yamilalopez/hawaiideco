import React from "react";
import CartContextProvider from "./Context/CartContext";
import AppRouter from "./routes/AppRouter";

import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <AppRouter />
    </CartContextProvider>
  );
}

export default App;