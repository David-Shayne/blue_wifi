/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

class PagesNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent",
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }
    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-info",
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent",
            });
        }
    };
    toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({
            collapseOpen: !this.state.collapseOpen,
        });
    };
    onCollapseExiting = () => {
        this.setState({
            collapseOut: "collapsing-out",
        });
    };
    onCollapseExited = () => {
        this.setState({
            collapseOut: "",
        });
    };
    render() {
        return (
            <Navbar
                className={"fixed-top " + this.state.color}
                color-on-scroll="100"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate small">
                        <NavbarBrand to="/" id="navbar-brand" tag={Link}>
                            <img
                                src={require("../../assets/img/logo.png")}
                                alt=""
                            />
                        </NavbarBrand>

                        <button
                            aria-expanded={this.state.collapseOpen}
                            className="navbar-toggler navbar-toggler"
                            onClick={this.toggleCollapse}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse
                        className={
                            "justify-content-end " + this.state.collapseOut
                        }
                        navbar
                        isOpen={this.state.collapseOpen}
                        onExiting={this.onCollapseExiting}
                        onExited={this.onCollapseExited}
                    >
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Blue Wifi
                                    </a>
                                </Col>
                                <Col
                                    className="collapse-close text-right"
                                    xs="6"
                                >
                                    <button
                                        aria-expanded={this.state.collapseOpen}
                                        className="navbar-toggler"
                                        onClick={this.toggleCollapse}
                                    >
                                        <i className="tim-icons icon-simple-remove" />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav navbar style={{ alignItems: "center" }}>
                            <NavItem className="p-0">
                                <NavLink
                                    data-placement="bottom"
                                    href="https://twitter.com/BlueWifi1"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Follow us on Twitter"
                                >
                                    <i className="fab fa-twitter" />
                                    <p className="d-lg-none d-xl-none">
                                        Twitter
                                    </p>
                                </NavLink>
                            </NavItem>
                            <NavItem className="p-0">
                                <NavLink
                                    data-placement="bottom"
                                    href="https://www.facebook.com/BlueWifiSA/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Like us on Facebook"
                                >
                                    <i className="fab fa-facebook-square" />
                                    <p className="d-lg-none d-xl-none">
                                        Facebook
                                    </p>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/pricing">
                                    Pricing List
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/issue">
                                    Have an issue?
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/pricing" tag={Link}>
                                    <Button
                                        className="nav-link  d-lg-block"
                                        color="primary"
                                    >
                                        <i className="tim-icons icon-coins" />{" "}
                                        Buy a voucher
                                    </Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default PagesNavbar;
