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
import ReCAPTCHA from 'react-google-recaptcha';
import classnames from 'classnames';
// reactstrap components
import emailjs from 'emailjs-com';
import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from 'reactstrap';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar.js';
import Footer from 'components/Footer/Footer.js';

class IssuePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares1to6: '',
            squares7and8: '',
            problemText: '',
            name: '',
            code: '',
            email: '',
            visible: false,
            recaptchaCompleted: false
        };

        this.dismissAlert = this.dismissAlert.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    componentDidMount() {
        document.body.classList.toggle('register-page');
        document.documentElement.addEventListener(
            'mousemove',
            this.followCursor
        );
    }
    dismissAlert(element) {
        this.setState({ element: false });
    }
    componentWillUnmount() {
        document.body.classList.toggle('register-page');
        document.documentElement.removeEventListener(
            'mousemove',
            this.followCursor
        );
    }
    followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
            squares1to6:
                'perspective(500px) rotateY(' +
                posX * 0.05 +
                'deg) rotateX(' +
                posY * -0.05 +
                'deg)',
            squares7and8:
                'perspective(500px) rotateY(' +
                posX * 0.02 +
                'deg) rotateX(' +
                posY * -0.02 +
                'deg)'
        });
    };

    sendEmail(e) {
        e.preventDefault();

        if (this.state.recaptchaCompleted) {
            emailjs
                .sendForm(
                    'gmail',
                    'ticket',
                    document.querySelector('#issue_form'),
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

            this.setState({ active: true });
        } else {
            alert('please redo ReCAPTCHA');
        }
    }

    render() {
        return (
            <>
                <PagesNavbar />

                <div className="wrapper">
                    <div className="page-header">
                        <div className="page-header-image" />
                        <div className="content">
                            <Container>
                                <Row>
                                    <Col
                                        lg="5"
                                        md="6"
                                        style={{ margin: '0 auto' }}
                                    >
                                        <div
                                            className="square square-7"
                                            id="square7"
                                            style={{
                                                transform: this.state
                                                    .squares7and8
                                            }}
                                        />
                                        <div
                                            className="square square-8"
                                            id="square8"
                                            style={{
                                                transform: this.state
                                                    .squares7and8
                                            }}
                                        />
                                        <Card className="card-register">
                                            <CardHeader>
                                                <CardImg
                                                    alt="..."
                                                    src={require('assets/img/square-purple-1.png')}
                                                    style={{
                                                        width: '100%',
                                                        height: '60%'
                                                    }}
                                                />
                                                <CardTitle
                                                    tag="h4"
                                                    style={{
                                                        marginLeft: '1rem',
                                                        marginTop: '1rem'
                                                    }}
                                                >
                                                    Problem?
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <div
                                                    className="h2"
                                                    style={{
                                                        color:
                                                            'rgba(255,255,255 ,0.8)',
                                                        marginBottom: '2'
                                                    }}
                                                >
                                                    Get help now
                                                </div>
                                                <Form
                                                    className="form"
                                                    id="issue_form"
                                                    onSubmit={this.sendEmail}
                                                >
                                                    <InputGroup
                                                        className={classnames({
                                                            'input-group-focus': this
                                                                .state
                                                                .fullNameFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-single-02" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Full Name"
                                                            type="text"
                                                            name="user_name"
                                                            required
                                                            onFocus={e =>
                                                                this.setState({
                                                                    fullNameFocus: true
                                                                })
                                                            }
                                                            value={
                                                                this.state.name
                                                            }
                                                            onChange={e =>
                                                                this.setState({
                                                                    name:
                                                                        e.target
                                                                            .value
                                                                })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({
                                                                    fullNameFocus: false
                                                                })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                            'input-group-focus': this
                                                                .state
                                                                .emailFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-email-85" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Email"
                                                            type="email"
                                                            name="user_email"
                                                            required
                                                            value={
                                                                this.state.email
                                                            }
                                                            onChange={e =>
                                                                this.setState({
                                                                    email:
                                                                        e.target
                                                                            .value
                                                                })
                                                            }
                                                            onFocus={e =>
                                                                this.setState({
                                                                    emailFocus: true
                                                                })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({
                                                                    emailFocus: false
                                                                })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                            'input-group-focus': this
                                                                .state
                                                                .passwordFocus
                                                        })}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-lock-circle" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            required
                                                            placeholder="Voucher code"
                                                            type="text"
                                                            name="voucher_code"
                                                            onFocus={e =>
                                                                this.setState({
                                                                    passwordFocus: true
                                                                })
                                                            }
                                                            value={
                                                                this.state.code
                                                            }
                                                            onChange={e =>
                                                                this.setState({
                                                                    code:
                                                                        e.target
                                                                            .value
                                                                })
                                                            }
                                                            onBlur={e =>
                                                                this.setState({
                                                                    passwordFocus: false
                                                                })
                                                            }
                                                        />
                                                    </InputGroup>
                                                    <FormGroup>
                                                        <Label
                                                            for="problemText"
                                                            style={{
                                                                marginTop:
                                                                    '1rem'
                                                            }}
                                                        >
                                                            Describe your
                                                            problem
                                                        </Label>
                                                        <Input
                                                            required
                                                            type="textarea"
                                                            name="message"
                                                            id="problemText"
                                                            value={
                                                                this.state
                                                                    .problemText
                                                            }
                                                            onChange={e =>
                                                                this.setState({
                                                                    problemText:
                                                                        e.target
                                                                            .value
                                                                })
                                                            }
                                                        />
                                                    </FormGroup>
                                                    <ReCAPTCHA
                                                        sitekey="6Lf5V80ZAAAAAAJ-gdvAJ_bcu2Fj3EgYuldlnqNd"
                                                        theme="dark"
                                                        onChange={() =>
                                                            this.setState({
                                                                recaptchaCompleted: true
                                                            })
                                                        }
                                                    />
                                                    <Button
                                                        className="btn-round"
                                                        type="submit"
                                                        color="primary"
                                                        size="lg"
                                                        style={{
                                                            marginTop: '1rem'
                                                        }}
                                                    >
                                                        Send
                                                    </Button>
                                                </Form>
                                            </CardBody>
                                            <CardFooter></CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <Alert
                                    color="info"
                                    isOpen={this.state.visible}
                                    toggle={this.onDismiss}
                                    style={{
                                        position: 'relative',
                                        zIndex: '10000'
                                    }}
                                >
                                    <strong>Ticket Sent!</strong> You should
                                    recieve help shortly via email.
                                </Alert>
                                <div className="register-bg" />
                                <div
                                    className="square square-1"
                                    id="square1"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                                <div
                                    className="square square-2"
                                    id="square2"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                                <div
                                    className="square square-3"
                                    id="square3"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                                <div
                                    className="square square-4"
                                    id="square4"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                                <div
                                    className="square square-5"
                                    id="square5"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                                <div
                                    className="square square-6"
                                    id="square6"
                                    style={{
                                        transform: this.state.squares1to6
                                    }}
                                />
                            </Container>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default IssuePage;
