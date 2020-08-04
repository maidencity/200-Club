import React, { FunctionComponent } from 'react'
import './TwoFactor.scss'

import { Button, Card, CardBody, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

export type TwoFactorProps = {}

export type TwoFactorState = {}

export const TwoFactorPage: FunctionComponent<TwoFactorProps> = ({ children }) => {

    let history = useHistory()

    return (
        
        <div className="app flex-row align-items-center">
        <Container>
            <Row className="justify-content-center">
                <Col xs="10" md="6">
                        
                        <Card className="p-4">
                            <CardBody>

                                <h1>Two Factor</h1>
                                <p className="text-muted">Please enter the 6 digit code for verification.</p>

                                <InputGroup className="input-prepend">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="6 digit code" />
                                </InputGroup>

                                <Button className="btn-brand btn-google-plus mt-4" block onClick={ e => {} } >
                                    <span >Submit</span>
                                </Button>

                                <Button className="btn-brand btn-light mb-4" block onClick={ (e) => history.goBack() } >
                                    <span>Back</span>
                                </Button>
                            


                
                            </CardBody>
                        </Card>
                        
    
                </Col>
            </Row>
        </Container>

    </div>

    
    )

}