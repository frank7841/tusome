import React from "react";
import {Sidenav} from '../components/sidenav'
import {Container, Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import  './product.css'
import tutor from '../assets/image/tutor.jpeg'
import happy from '../assets/image/happy.jpeg'
const Search = () => {
    return (
        <div className="bg">
        
        <Container fluid>
        <Sidenav id="side-pad" />
        <Row   >
  
            <Col xs={2}></Col>
                  
                        
            
            <Col  className="card-prop" id="dif" >
                <Card className="card-prop">
                    <article className="article"
                    style={{ backgroundImage: `url(${tutor})` }}>

                        <strong className="header">what do you want to learn today?</strong>
                    </article>
                    <section className="tut" >
                        <h3 className="heading">Looking a tutor for :</h3>
                        <Form className="section-form">
                            <FormGroup className="pading-form">
                                <Input type="select" name="select" id="exampleSelect" className="options">
                                    <option>8-4-4</option>
                                    
                                </Input>
                            </FormGroup>
                            <FormGroup className="pading-form">
                                <Input type="select" name="select" id="exampleSelect" className="options">
                                    <option>Select your subject</option>
                                    
                                </Input>
                            </FormGroup>
                            <FormGroup className="pading-form">
                                <Input type="select" name="select" id="exampleSelect" className="options">
                                    <option>Education Level</option>
                                    
                                </Input>
                            </FormGroup>
                            <Button id="search-tutor">Search for tutor</Button>
                        </Form>    
                    </section>
                </Card>
            
            </Col>
            <Col  className="card-prop">
            <Card className="card-prop">
            
            <article className="article1"
                    style={{ backgroundImage: `url(${happy})` }}>
                <h2><span className="green">Congrats </span><span>!, Your search Results will be displayed here</span></h2>        
                <strong className="header1">finding a tutor...</strong>
            </article>
            </Card>
            </Col>
            </Row>
        </Container>
        </div>
        
    );
};

export default Search;
