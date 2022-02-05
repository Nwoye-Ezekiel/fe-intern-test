import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Intro from "./pages/Intro/Intro";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact component={Intro} path="/" />
        <Layout>
          <Route exact component={SignIn} path="/sign-in" />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
