import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";

const App = () => {
  const [progress, setprogress] = useState(0);
  const setProgress = (progress) =>{
    setprogress(progress);
  }
   return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} key="general" pageSize="5" country="in" category="general" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} key="sports" pageSize="5" country="in" category="sports" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress}
              key="business"
              pageSize="5"
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress}
              key="entertainment"
              pageSize="5"
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress}
              key="technology"
              pageSize="5"
              country="in"
              category="technology"
            />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} key="health" pageSize="5" country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} key="science" pageSize="5" country="in" category="science" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
