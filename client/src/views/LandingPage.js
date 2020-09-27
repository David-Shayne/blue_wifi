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
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
} from "reactstrap";

// core components
import PagesNavbar from "../components/Navbars/PagesNavbar.js";
import Footer from "../components/Footer/Footer.js";

class LandingPage extends React.Component {
    state = {
        comingSoonModalIsOpen: true,
    };
    componentDidMount() {
        document.body.classList.toggle("landing-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    render() {
        return (
            <>
                <PagesNavbar />
                <div className="wrapper">
                    <header className="page-header">
                        <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/blob.png")}
                        />
                        <img
                            alt="..."
                            className="path2"
                            src={require("../assets/img/path2.png")}
                        />
                        <img
                            alt="..."
                            className="shapes triangle"
                            src={require("../assets/img/triunghiuri.png")}
                        />
                        <img
                            alt="..."
                            className="shapes wave"
                            src={require("../assets/img/waves.png")}
                        />
                        <img
                            alt="..."
                            className="shapes circle"
                            src={require("../assets/img/cercuri.png")}
                        />
                        <div className="content-center">
                            <Modal
                                isOpen={this.state.comingSoonModalIsOpen}
                                toggle={() =>
                                    this.setState({
                                        comingSoonModalIsOpen: false,
                                    })
                                }
                                size="lg"
                                style={{
                                    textAlign: "center",
                                    transform: "translate(0,30vh)",
                                }}
                            >
                                <ModalHeader
                                    style={{
                                        justifyContent: "center",
                                        paddingTop: "4vh",
                                        background: "#0481C6",
                                    }}
                                >
                                    <h1
                                        className="h1"
                                        style={{
                                            textAlign: "center",
                                            color: "white",
                                        }}
                                    >
                                        We are coming soon!
                                    </h1>
                                </ModalHeader>
                                <ModalBody
                                    className="h4"
                                    style={{
                                        justifyContent: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    We are currently still in development...
                                </ModalBody>
                            </Modal>
                            <Row className="row-grid justify-content-between align-items-center text-left">
                                <Col lg="6" md="6">
                                    <h1 className="text-white title">
                                        Unlimited Data <br />
                                        Great Connection
                                        <br />
                                        Brilliant Service
                                    </h1>
                                    <p>For the community, By the community</p>

                                    <div className="btn-wrapper mb-3">
                                        <a
                                            className="category text-success d-inline"
                                            style={{ cursor: "pointer" }}
                                            href="/pricing"
                                        >
                                            From R20 a day
                                        </a>
                                    </div>
                                </Col>
                                <Col lg="4" md="5">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("../assets/img/wifi.svg")}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </header>
                    <section className="section section-lg">
                        <section className="section">
                            <img
                                alt="..."
                                className="path"
                                src={require("../assets/img/path4.png")}
                            />
                            <Container>
                                <Row className="row-grid justify-content-between">
                                    <Col className="mt-lg-5" md="5">
                                        <Row>
                                            <Col
                                                className="px-2 py-2"
                                                lg="6"
                                                sm="12"
                                            >
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-trophy text-warning" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">
                                                                        Great
                                                                    </CardTitle>
                                                                    <p />
                                                                    <p className="card-category">
                                                                        Service
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col
                                                className="px-2 py-2"
                                                lg="6"
                                                sm="12"
                                            >
                                                <Card className="card-stats upper bg-default">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-coins text-white" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">
                                                                        R20
                                                                    </CardTitle>
                                                                    <p />
                                                                    <p className="card-category">
                                                                        a Day
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                className="px-2 py-2"
                                                lg="6"
                                                sm="12"
                                            >
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-gift-2 text-info" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">
                                                                        Free
                                                                    </CardTitle>
                                                                    <p />
                                                                    <p className="card-category">
                                                                        1 day
                                                                        voucher
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col
                                                className="px-2 py-2"
                                                lg="6"
                                                sm="12"
                                            >
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-credit-card text-success" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">
                                                                        Super
                                                                    </CardTitle>
                                                                    <p />
                                                                    <p className="card-category">
                                                                        Connection
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="6">
                                        <div className="pl-md-5">
                                            <h1>
                                                Unlimited Data <br />
                                                Unlimited Power
                                            </h1>
                                            <p>
                                                Blue Wifi brings you the best,
                                                most comprehensive wifi right to
                                                your doorstep. Feel it's amazing
                                                coverage and connection, without
                                                buffering, and without trouble.
                                                Gain unlimited data from only
                                                R20 a day and feel the power of
                                                Blue.
                                            </p>
                                            <br />
                                            <p>
                                                We pride ourselves in excellent
                                                service and quick responses to
                                                any issues. Connect to Blue and
                                                connect to life.
                                            </p>
                                            <br />
                                            <a
                                                className="font-weight-bold text-info mt-5"
                                                href="/pricing"
                                            >
                                                Voucher Pricing{" "}
                                                <i className="tim-icons icon-minimal-right text-info" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </section>
                    <section className="section section-lg">
                        <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/path4.png")}
                        />
                        <img
                            alt="..."
                            className="path2"
                            src={require("../assets/img/path5.png")}
                        />
                        <img
                            alt="..."
                            className="path3"
                            src={require("../assets/img/path2.png")}
                        />
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <h1
                                        className="text-center"
                                        style={{
                                            margin: "0 auto",
                                            marginBottom: "-5vh",
                                        }}
                                    >
                                        Bringing you only the best
                                    </h1>
                                    <Row className="row-grid justify-content-center">
                                        <Col lg="3">
                                            <div className="info">
                                                <div className="icon icon-primary">
                                                    <i className="tim-icons icon-money-coins" />
                                                </div>
                                                <h4 className="info-title">
                                                    Low Cost
                                                </h4>
                                                <hr className="line-primary" />
                                                <p>
                                                    From only R20 a day, Blue
                                                    Wifi offers you the best
                                                    experience at the best
                                                    price.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div className="info">
                                                <div className="icon icon-warning">
                                                    <i className="tim-icons icon-chart-pie-36" />
                                                </div>
                                                <h4 className="info-title">
                                                    Vast Coverage
                                                </h4>
                                                <hr className="line-warning" />
                                                <p>
                                                    We bring you the best
                                                    coverage and connection you
                                                    could ever dream of. When we
                                                    come to your area, you will
                                                    have full speeds and a great
                                                    connection, all the time.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="3">
                                            <div className="info">
                                                <div className="icon icon-success">
                                                    <i className="tim-icons icon-single-02" />
                                                </div>
                                                <h4 className="info-title">
                                                    Personal Assistance
                                                </h4>
                                                <hr className="line-success" />
                                                <p>
                                                    We pride ourselves in giving
                                                    the best, down to Earth
                                                    service you could ever
                                                    imagine. We are only a text,
                                                    phone call or email away
                                                    from getting you back online
                                                    in an instant.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg section-safe">
                        <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/path5.png")}
                        />
                        <Container>
                            <Row className="row-grid justify-content-between">
                                <Col md="5">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        src={require("../assets/img/data.svg")}
                                    />
                                    <Card className="card-stats bg-danger">
                                        <CardBody>
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <CardTitle tag="p">
                                                        100%
                                                    </CardTitle>
                                                    <p className="card-category text-white">
                                                        Safe
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="card-stats bg-info">
                                        <CardBody>
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <CardTitle tag="p">
                                                        Unlimited
                                                    </CardTitle>
                                                    <p className="card-category text-white">
                                                        Data
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className="card-stats bg-default">
                                        <CardBody>
                                            <div className="justify-content-center">
                                                <div className="numbers">
                                                    <CardTitle tag="p">
                                                        Fast
                                                    </CardTitle>
                                                    <p className="card-category text-white">
                                                        Speeds
                                                    </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="px-md-5">
                                        <hr className="line-success" />
                                        <h3>Awesome features</h3>
                                        <p>
                                            Here are some great features you can
                                            look forward to when using our wifi
                                        </p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-vector" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>
                                                            Connection from
                                                            anywhere
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-tap-02" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>
                                                            Easy to use vouchers
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon icon-success mb-2">
                                                        <i className="tim-icons icon-single-02" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h6>
                                                            Super friendly
                                                            support team
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="section section-lg section-coins">
                        {/* <img
                            alt="..."
                            className="path"
                            src={require("../assets/img/path3.png")}
                        /> */}
                        <Container>
                            <Row>
                                <Col md="4">
                                    <hr className="line-info" />
                                    <h1>
                                        Choose the voucher{" "}
                                        <span className="text-info">
                                            that fits your needs
                                        </span>
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../assets/img/bronze.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4 className="text-uppercase">
                                                        Day Voucher
                                                    </h4>
                                                    <hr
                                                        className="line-primary"
                                                        style={{
                                                            background:
                                                                "#DD9773",
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        24/7 Support
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                className="btn-simple"
                                                color="primary"
                                                style={{
                                                    color: "#DD9773",
                                                    borderColor: "#DD9773",
                                                }}
                                            >
                                                R20
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../assets/img/silver.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4 className="text-uppercase">
                                                        Week Voucher
                                                    </h4>
                                                    <hr
                                                        className="line-success"
                                                        style={{
                                                            background:
                                                                "#E6F2F5",
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        24/7 Support
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                className="btn-simple"
                                                color="success"
                                                style={{
                                                    color: "#E6F2F5",
                                                    borderColor: "#E6F2F5",
                                                }}
                                            >
                                                R120
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("../assets/img/gold.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4 className="text-uppercase">
                                                        Month Voucher
                                                    </h4>
                                                    <hr
                                                        className="line-info"
                                                        style={{
                                                            background:
                                                                "#E7BC6A",
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        24/7 Support
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                className="btn-simple"
                                                color="info"
                                                style={{
                                                    color: "#E7BC6A",
                                                    borderColor: "#E7BC6A",
                                                }}
                                            >
                                                R380
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer />
                </div>
            </>
        );
    }
}

export default LandingPage;
