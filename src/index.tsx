import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "@reatom/core";
import { context } from "@reatom/react";
import { Page, Main } from "./components/common/grid";
import MainPage from "./pages/main";
import CreatProduct from "./pages/create-product";
import ProductsTable from "./pages/products-table";
import ProductPage from "./pages/product";
import "./index.css";

const store = createStore();

ReactDOM.render(
  <context.Provider value={store}>
    <BrowserRouter>
      <Page>
        <Main>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/create-product" component={CreatProduct} />
            <Route exact path="/products" component={ProductsTable} />
            <Route exact path="/products/:productId" component={ProductPage} />
          </Switch>
        </Main>
      </Page>
    </BrowserRouter>
  </context.Provider>,
  document.getElementById("root")
);
