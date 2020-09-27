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
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md="3">
                            <h1 className="title">Blue Wifi</h1>
                        </Col>
                        <Col md="3">
                            <Nav>
                                <NavItem>
                                    <NavLink to="/" tag={Link}>
                                        Home
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/about" tag={Link}>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" tag={Link}>
                                        Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col md="3">
                            <h3 className="title">Follow us:</h3>
                            <div className="btn-wrapper profile">
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href="https://twitter.com/bluewifi1"
                                    id="tooltip622135962"
                                    target="_blank"
                                >
                                    <i className="fab fa-twitter" />
                                </Button>
                                <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip622135962"
                                >
                                    Follow us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon btn-neutral btn-round btn-simple"
                                    color="default"
                                    href="https://www.facebook.com/BlueWifiSA/"
                                    id="tooltip230450801"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook-square" />
                                </Button>
                                <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip230450801"
                                >
                                    Like us
                                </UncontrolledTooltip>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;