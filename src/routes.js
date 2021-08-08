import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/website";
import DashBoard from "./pages/admin/dashboard";

import AddFormProduct from "./pages/admin/product/add";
import List from "./pages/admin/product";
import EditFormProduct from "./pages/admin/product/edit";

import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";

import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import AdminRoute from "./auth/adminRoute";

import About from "./pages/website/contact";
import HomeContainer from '../src/containers/HomeContainer';

import CategoryPage from "./pages/website/category";
import CategoryDetailPage from "./pages/website/cate-detail";
import Category from "./pages/admin/category";
import AddFormCategory from "./pages/admin/category/add";
import EditFormCategory from "./pages/admin/category/edit";



const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <AdminRoute exact path="/admin">
                <DashBoard />
              </AdminRoute>

              <AdminRoute exact path="/admin/products">
                <List {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/products/add">
                <AddFormProduct {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/products/:id/edit">
                <EditFormProduct {...props} />
              </AdminRoute>

              <AdminRoute exact path="/admin/categories">
                <Category {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/categories/add">
                <AddFormCategory {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/categories/:id/edit">
                <EditFormCategory {...props} />
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>
        
        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/">
                <HomeContainer />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/contact">
                <About />
              </Route>
              <Route exact path="/category">
                <CategoryPage />
              </Route>
              <Route exact path="/category/:id">
                <CategoryDetailPage />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
