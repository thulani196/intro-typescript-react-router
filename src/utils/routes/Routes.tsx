import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../../components/Header";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/authPages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ProductPage from "../../pages/ProductPage";
import ProductsPage from "../../pages/ProductsPage";

const Routes = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact={true} from="/" to="/products" />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin">
          {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/products" exact={true} component={ProductsPage} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};
export default Routes;
