/* Components and pages */
import Topnav from "./components/Topnav";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";

/* Material UI imports */
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createTheme } from "@material-ui/core/styles";
import { light, dark } from "./themes/basicTheme";

/* React imports */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";


require('dotenv').config()

function App() {

  const [theme, setTheme] = useState(!!JSON.parse(localStorage.getItem('theme')));
  const appliedTheme = createTheme(theme ? light : dark);
  const changeTheme = (theme) => { localStorage.setItem('theme', !theme); return setTheme(!theme) };
  

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Topnav args={[changeTheme, theme]} />
      <Router>
        <Switch>
          <Route exac path='/login' component={Login} />
          <Route exac path='/register' component={Register} />
          <Route exac path='/' component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
