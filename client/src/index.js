import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import "./assets/css/nucleo-icons.min.css";
import "./assets/css/blk-design-system-react.min.css";

import LandingPage from "./views/LandingPage";
import IssuePage from "./views/IssuePage";
import AboutPage from "./views/AboutPage";
import PricingPage from "./views/PricingPage";

ReactDOM.render(
    <HashRouter basename="/">
        <div className="">
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/issue">
                <IssuePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/pricing">
                <PricingPage />
            </Route>
        </div>
    </HashRouter>,
    document.getElementById("root")
);
