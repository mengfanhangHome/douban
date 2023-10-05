import useWithFrom from "@/component/useWithFrom"; // 设置antd公共样式的高阶函数
import { Router, Route, Switch } from "react-router-dom";
import { LoginPage, HomePage, ShopPage, TableMovie, UserPage } from "@/pages";
import { history } from "@/router/history";
import Test from "@/pages/test";
import "./App.css";
function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/home/:type" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/list" component={TableMovie} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default useWithFrom(App);
