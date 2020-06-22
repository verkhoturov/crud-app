import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { context, useAtom, useAction } from "@reatom/react";
import { Page, Main } from "./components/common/grid";
import MainPage from "./pages/main";
import CreatProduct from "./pages/create-product";
import ProductsTable from "./pages/products-table";
import ProductPage from "./pages/product";
import "./index.css";
import { store } from "./store";
import { products, readProducts } from "./atoms";
import ProductsDataService from "./services/products";

const App: React.FC = () => {
  const data = useAtom(products);
  //@ts-ignore
  const getData = useAction((val) => readProducts(val));

  React.useEffect(() => {
    ProductsDataService.getAll()
      .then((response) => {
        getData(response.data);
      })
      .catch((e) => {
        alert("К сожалению, внезапно вылез Гейзенбаг :( К счастью, статистика благоволит вам, попробуйте повторить")
      });
  }, []);

  return (
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
  );
};

ReactDOM.render(
  <context.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </context.Provider>,
  document.getElementById("root")
);
