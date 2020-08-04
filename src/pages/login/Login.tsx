import React, { FunctionComponent } from 'react'
import './Login.scss'

import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../../components/auth/context'

export type LoginProps = {}

export type LoginState = {}

export const LoginPage: FunctionComponent<LoginProps> = ({ children }) => {
    
    const history = useHistory()

    // return (

    //     <AuthContext.Consumer>
        
    //         { auth => {

                return (

                    <div className="app flex-row align-items-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col md="6">
                                                    
                                    <CardGroup>
                                        
                                        <Card className="p-4">
                                            <CardBody>

                                                <h1>Login</h1>
                                                <p className="text-muted">Sign In to your account using any of the providers below.</p>
  
                                            
                                                <Button className="btn-brand btn-facebook mb-4" block onClick={ (e) => {}/* auth.authFacebook()*/ } >
                                                    <i className="fa fa-facebook"></i>
                                                    <span className="d-lg-down-none">Facebook</span>
                                                </Button>
                                            
                                                <Button className="btn-brand btn-github mb-4" block onClick={ (e) => {}/* auth.authGitHub()*/ } >
                                                    <i className="fa fa-github"></i>
                                                    <span className="d-lg-down-none">GitHub</span>
                                                </Button>

                                                <Button className="btn-brand btn-google-plus mb-4" block onClick={ (e) => {}/* auth.authGoogle()*/ } >
                                                    <i className="fa fa-google"></i>
                                                    <span className="d-lg-down-none">Google</span>
                                                </Button>

                                                <Button className="btn-brand btn-twitter mb-4" block onClick={ (e) => {} /* auth.authTwitter()*/ } >
                                                    <i className="fa fa-twitter"></i>
                                                    <span className="d-lg-down-none">Twitter</span>
                                                </Button>
                                            
                                                <Button className="btn-brand btn-link text-white mb-4" block onClick={ (e) => history.goBack() } >
                                                    <i className="fa fa-arrow-left"></i>
                                                    <span className="d-lg-down-none">Back</span>
                                                </Button>

                                            </CardBody>
                                        </Card>

                                    </CardGroup>
                    
                                </Col>
                            </Row>
                        </Container>
            
                    </div>

                )

        //     } }

        // </AuthContext.Consumer>
    
    // )

}