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
import emailjs from 'emailjs-com';
import classnames from 'classnames';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
    Alert
} from 'reactstrap';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar.js';
import Footer from 'components/Footer/Footer.js';

const carouselItems = [
    {
        src: require('assets/img/townshipLife1.jpg'),
        altText: 'Slide 1',
        caption: 'Township Life, South Africa'
    }
];

let ps = null;

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 1,
            name: '',
            company: '',
            phone: '',
            email: '',
            message: '',
            visible: false
        };

        this.onChange = this.onChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    componentDidMount() {
        if (navigator.platform.indexOf('Win') > -1) {
            document.documentElement.className += ' perfect-scrollbar-on';
            document.documentElement.classList.remove('perfect-scrollbar-off');
            let tables = document.querySelectorAll('.table-responsive');
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle('profile-page');
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf('Win') > -1) {
            ps.destroy();
            document.documentElement.className += ' perfect-scrollbar-off';
            document.documentElement.classList.remove('perfect-scrollbar-on');
        }
        document.body.classList.toggle('profile-page');
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail',
                'business',
                document.querySelector('#contact_form'),
                'user_wu0cjpDk07ph5E7v7cXjJ'
            )
            .then(
                result => {
                    console.log(result);
                },
                error => {
                    console.log(error.text);
                }
            );

        this.setState({ visible: true });
    }

    render() {
        return (
            <>
                <PagesNavbar />
                <div className="wrapper">
                    <div className="page-header">
                        <img
                            alt="..."
                            className="dots"
                            src={require('assets/img/dots.png')}
                        />
                        <img
                            alt="..."
                            className="path"
                            src={require('assets/img/path4.png')}
                        />
                        <Container className="align-items-center">
                            <Row>
                                <Col lg="6" md="6">
                                    <h1 className="profile-title text-left">
                                        Blue Wifi
                                    </h1>
                                    <h5 className="text-on-back">01</h5>
                                    <p className="profile-description">
                                        Blue Wifi provides internet solutions to
                                        informal settlements while holding up
                                        our principles of having excellent
                                        service, the best product and helping
                                        the community. The majority of jobs in
                                        Blue Wifi are held by township
                                        residents. We work for the community, we
                                        are the community.
                                    </p>
                                </Col>
                                <Col className="ml-auto mr-auto" lg="4" md="6">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <h2>Trackers</h2>
                                        </CardHeader>
                                        <CardBody>
                                            <Nav
                                                className="nav-tabs-primary justify-content-center"
                                                tabs
                                            >
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({
                                                            active:
                                                                this.state
                                                                    .tabs === 1
                                                        })}
                                                        onClick={e =>
                                                            this.toggleTabs(
                                                                e,
                                                                'tabs',
                                                                1
                                                            )
                                                        }
                                                        href="#pablo"
                                                    >
                                                        Info
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({
                                                            active:
                                                                this.state
                                                                    .tabs === 3
                                                        })}
                                                        onClick={e =>
                                                            this.toggleTabs(
                                                                e,
                                                                'tabs',
                                                                3
                                                            )
                                                        }
                                                        href="#pablo"
                                                    >
                                                        News
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent
                                                className="tab-subcategories"
                                                activeTab={
                                                    'tab' + this.state.tabs
                                                }
                                            >
                                                <TabPane tabId="tab1">
                                                    <Table
                                                        className="tablesorter"
                                                        responsive
                                                    >
                                                        <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">
                                                                    Vouchers
                                                                    sold
                                                                </th>
                                                                <th className="header">
                                                                    Jobs Created
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>0</td>

                                                                <td>4</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>

                                                <TabPane tabId="tab3">
                                                    <Table
                                                        className="tablesorter"
                                                        responsive
                                                    >
                                                        <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">
                                                                    Latest Blue
                                                                    Wifi News
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    Blue wifi to
                                                                    open soon...
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="6">
                                    <Row className="justify-content-between align-items-center">
                                        <UncontrolledCarousel
                                            items={carouselItems}
                                        />
                                    </Row>
                                </Col>
                                <Col md="5">
                                    <h1 className="profile-title text-left">
                                        Projects
                                    </h1>
                                    <h5 className="text-on-back">02</h5>
                                    <p className="profile-description text-left">
                                        Blue Wifi aims to open various projects
                                        across South Africa, helping those in
                                        need and providing the best service
                                        imaginable. Join us on our adventure
                                        while we change the world.
                                    </p>
                                    <div className="btn-wrapper pt-3">
                                        <Button
                                            className="btn-simple"
                                            color="primary"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i className="tim-icons icon-book-bookmark" />{' '}
                                            Join Newsletter
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <section className="section">
                        <Container>
                            <Row>
                                <Col md="6">
                                    <Card className="card-plain">
                                        <CardHeader>
                                            <h1 className="profile-title text-left">
                                                Contact
                                            </h1>
                                            <h5 className="text-on-back">03</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Form
                                                onSubmit={e =>
                                                    this.sendEmail(e)
                                                }
                                            >
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>
                                                                Your Name
                                                            </label>
                                                            <Input
                                                                required
                                                                placeholder="John Doe"
                                                                type="text"
                                                                name="user_name"
                                                                value={
                                                                    this.state
                                                                        .name
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                        {
                                                                            name:
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>
                                                                Email address
                                                            </label>
                                                            <Input
                                                                required
                                                                name="user_email"
                                                                placeholder="john.doe@email.com"
                                                                type="email"
                                                                value={
                                                                    this.state
                                                                        .email
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                        {
                                                                            email:
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>Phone</label>
                                                            <Input
                                                                required
                                                                name="user_phone"
                                                                type="text"
                                                                placeholder="+27 60 983 5400"
                                                                value={
                                                                    this.state
                                                                        .phone
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                        {
                                                                            phone:
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label>
                                                                Company
                                                            </label>
                                                            <Input
                                                                required
                                                                name="user_company"
                                                                placeholder="John Doe (PTY) LTD"
                                                                type="text"
                                                                value={
                                                                    this.state
                                                                        .company
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                        {
                                                                            company:
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label>
                                                                Message
                                                            </label>
                                                            <Input
                                                                required
                                                                name="message"
                                                                placeholder="Type your message here..."
                                                                type="textarea"
                                                                value={
                                                                    this.state
                                                                        .message
                                                                }
                                                                onChange={e =>
                                                                    this.setState(
                                                                        {
                                                                            message:
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        </FormGroup>
                                                        <Button
                                                            className="btn-round float-right"
                                                            color="primary"
                                                            data-placement="right"
                                                            id="tooltip341148792"
                                                            type="submit"
                                                        >
                                                            Send Message
                                                        </Button>
                                                    </Col>
                                                </Row>

                                                <UncontrolledTooltip
                                                    delay={0}
                                                    placement="right"
                                                    target="tooltip341148792"
                                                >
                                                    We'll respond shortly
                                                </UncontrolledTooltip>
                                            </Form>
                                            <Alert
                                                style={{ marginTop: '1rem' }}
                                                color="info"
                                                isOpen={this.state.visible}
                                                toggle={() =>
                                                    this.setState({
                                                        visible: false
                                                    })
                                                }
                                            >
                                                Message Sent
                                            </Alert>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className="ml-auto" md="4">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-square-pin" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">
                                                Find us at the office
                                            </h4>
                                            <p>N/A</p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-mobile" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">
                                                Give us a ring
                                            </h4>
                                            <p>
                                                David Shayne <br />
                                                +27 60 983 5400 <br />
                                                Mon - Fri, 8:00-22:00
                                            </p>
                                        </div>
                                    </div>
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

export default AboutPage;
