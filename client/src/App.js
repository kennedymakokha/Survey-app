import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopNav from './components/TopNavbar'

import Surveys from './pages/surveys'
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Survey from "./pages/surveys/categories";
import Category from "./pages/admin";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Questions from "./pages/admin/questions";
import Response from "./pages/admin/response";
import ResponseDetail from "./components/responseDetail";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/our-surveys" component={Survey} />
            <Route exact path="/our-surveys/:category" component={Surveys} />
            <Route exact path="/admin/survey/categories" component={Category} />
            <Route exact path="/admin/survey/categories/:slug/questions" component={Questions} />
            <Route exact path="/admin/survey/categories/:slug/response" component={Response} />
            <Route exact path="/admin/survey/categories/:slug/response/responsedetail" component={ResponseDetail} />
          </Switch>
        </div>

      </Router>

    </Provider>
  );
}

export default App;
