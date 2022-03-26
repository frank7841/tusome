import React from 'react'
import {Sidenav} from '../components/sidenav'
import {Container, Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText, CardTitle } from 'reactstrap'
import  './discover.css'
import './select.css'
import tutor from '../assets/image/tutor.jpeg'
import timer from '../assets/image/timer.png'

const Selected=()=> {
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

                        <strong className="header-d">what do you want to learn today?</strong>
                    </article>
                    <section className='tut' >
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
                <section className='timer'>
                    <img src={timer} className="img-timer"/>
                    <h2 className='confirm'>You have succesfuly <strong className='c-green'>selected</strong> tutor  <strong className="c-orange">John Doe </strong>and we will be contacting you in a short while. </h2>
                    
                </section>
                <strong className='b-footer'>NB: Make sure your registered mobile number is active</strong>
            </Col>
            </Row>
        </Container>
        </div>

  )
}
export default Selected;