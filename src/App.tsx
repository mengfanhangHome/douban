import useWithFrom from "@/component/useWithFrom"; // 设置antd公共样式的高阶函数
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage, HomePage, ShopPage, TableMovie } from "@/pages";
import Test from "@/pages/test";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/home/:type" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/list" component={TableMovie} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default useWithFrom(App);
