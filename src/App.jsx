import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayouts";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Users from "./pages/Users";

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Library from "./pages/Library";
import UsersRoles from "./pages/UsersRoles";

function App() {
  const darkMode = useSelector((store) => store.global.darkMode);

  return (
    <div className={` ${darkMode ? "dark bg-secondaryColor" : "darkTheme"}`}>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </Route>
          <Route path="/logout" exact>
            <AuthLayout>
              <Logout />
            </AuthLayout>
          </Route>
          <Route path="/forgot-password" exact>
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          </Route>
          <Route path="/register" exact>
            <AuthLayout>
              <Register />
            </AuthLayout>
          </Route>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route>
            <PublicLayout>
              <Switch>
                <Route path="/dashboard" exact>
                  <Home />
                </Route>
                <Route path="/users" exact>
                  <Users />
                </Route>
                <Route path="/profile" exact>
                  <Profile />
                </Route>
                <Route path="/library" exact>
                  <Library />
                </Route>
                <Route path="/usersroles" exact>
                  <UsersRoles />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
