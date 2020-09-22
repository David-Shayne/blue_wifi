import React from "react";
import ReactSEO from "react-seo";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/css/nucleo-icons.min.css";
import "./assets/css/blk-design-system-react.min.css";

import LandingPage from "./views/LandingPage";
import IssuePage from "./views/IssuePage";
import AboutPage from "./views/AboutPage";
import PricingPage from "./views/PricingPage";

ReactSEO.startMagic(
    [
        { url: "/landing" },
        { url: "/pricing" },
        { url: "/" },
        { url: "/issue" },
        { url: "/about" },
    ],
    RenderDOM
);

function RenderDOM() {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route
                    path="/issue"
                    render={(props) => <IssuePage {...props} />}
                />
                <Route
                    path="/about"
                    render={(props) => <AboutPage {...props} />}
                />
                <Route
                    path="/pricing"
                    render={(props) => <PricingPage {...props} />}
                />
                <Route
                    path="/"
                    render={(props) => <LandingPage {...props} />}
                />
            </Switch>
        </BrowserRouter>,
        document.getElementById("root")
    );
}
