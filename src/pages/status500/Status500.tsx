import React, { FunctionComponent } from 'react'
import './Status500.scss'

import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export type Status500Props = {}

export type Status500State = {}

export const Status500Page: FunctionComponent<Status500Props> = ({ children }) => {

    return (
        <div className="app flex-row align-items-center">

            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        
                        <div className="clearfix">
                            <h1 className="float-left display-3 mr-4">500</h1>
                            <h4 className="pt-3">Houston, we have a problem!</h4>
                            <p className="text-muted float-left">The page you are looking for is temporarily unavailable.</p>
                        </div>
                        
                        <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="What are you looking for?" />
                            <InputGroupAddon addonType="append">
                                <Button color="info">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    
    )

}