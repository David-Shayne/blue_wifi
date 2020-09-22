import React from "react";
import MapComponent from "../components/MapComponent";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
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
import PagesNavbar from "./components/Navbars/PagesNavbar.js";
import Footer from "./components/Footer/Footer.js";
class PricingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };

        this.toggleModal = this.toggleModal.bind(this);
    }
    componentDidMount() {
        document.body.classList.toggle("landing-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    toggleModal() {
        this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
    }
    render() {
        return (
            <>
                <PagesNavbar />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggle={this.toggleModal}
                    size="lg"
                    style={{
                        textAlign: "center",
                        transform: "translate(0,10%)",
                    }}
                >
                    <ModalHeader
                        style={{
                            justifyContent: "center",
                            paddingTop: "4vh",
                            background: "#0481C6",
                        }}
                    >
                        <div
                            className="h1"
                            style={{ textAlign: "center", color: "white" }}
                        >
                            Get your voucher today
                        </div>
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
                        Purchase a voucher at the "4 way stop" spaza shop at 26
                        Pokela Road
                        <div
                            className="map"
                            style={{
                                width: "90%",
                                height: "30rem",
                                marginTop: "3.33vh",
                            }}
                        >
                            <MapComponent />
                        </div>
                    </ModalBody>
                </Modal>

                <div className="wrapper" style={{ paddingTop: "16vh" }}>
                    <div className="section">
                        <Container className="align-items-center">
                            <h1
                                style={{
                                    margin: "0 auto",
                                    marginBottom: "5vh",
                                    textAlign: "center",
                                }}
                            >
                                Buy vouchers at the "4 way stop" Spaza Shop
                            </h1>
                            <hr
                                className="line-info"
                                style={{
                                    marginBottom: "15vh",
                                    textAlign: "center",
                                    width: "100%",
                                }}
                            />

                            <Row>
                                <Col md="4">
                                    <Card className="card-coin card-plain mobile-voucher">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/bronze.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4
                                                        className="text-uppercase"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
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
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
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
                                                onClick={this.toggleModal}
                                            >
                                                R20
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain mobile-voucher">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/silver.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4
                                                        className="text-uppercase"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
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
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
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
                                                onClick={this.toggleModal}
                                            >
                                                R120
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain mobile-voucher">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/gold.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col
                                                    className="text-center"
                                                    md="12"
                                                >
                                                    <h4
                                                        className="text-uppercase"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
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
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        6mbp/s Speed
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        Unlimited Data
                                                    </ListGroupItem>
                                                    <ListGroupItem
                                                        style={{
                                                            color:
                                                                "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
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
                                                onClick={this.toggleModal}
                                            >
                                                R380
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default PricingPage;
