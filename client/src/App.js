/* Components, context and pages */
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import Topnav from "./components/Topnav";
import Flash from "./components/Flash";
import { AuthProvider } from "./context/UserContext"

import axios from "axios";

/* Material UI imports */
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { light, dark } from "./themes/basicTheme";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

/* React imports */
import { Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import history from "./utils/history";

function App() {

  axios.interceptors.request.use(function (config) {
    if ('currentUser' in localStorage) {
      const token = JSON.parse(localStorage.getItem('currentUser')).accessToken
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  let [theme, setTheme] = useState(!!JSON.parse(localStorage.getItem('theme')));
  let appliedTheme = createMuiTheme(theme ? light : dark);
  let changeTheme = (theme) => { localStorage.setItem('theme', !theme); return setTheme(!theme) };

  let [flashMessageVisibility, setFlashMessageVisibility] = useState("flash-message" in localStorage);
  let closeFlashMessage = (visibility) => { localStorage.removeItem('flash-message'); return setFlashMessageVisibility(!visibility) }

  return (
    <ThemeProvider theme={appliedTheme}>
      <AuthProvider>
        <CssBaseline />
        <Topnav args={[changeTheme, theme]} />
        <Flash args={[flashMessageVisibility, closeFlashMessage]} />
        <Router history={history}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/' component={Home} />
            <Route exact path="" component={NotFound} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
