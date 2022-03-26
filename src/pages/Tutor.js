import React from 'react'
import {Sidenav} from '../components/sidenav'
import {Container, Row, Col, Card, Button, Form, FormGroup, Label, Input, FormText, CardTitle } from 'reactstrap'
import  './discover.css'
import tutor from '../assets/image/tutor.jpeg'
import pic from '../assets/image/pic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
 const Tutor=()=> {
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
            <section className='disc-tutor'>
              <h3 className='disc-header'><strong>DISCOVERED TUTORS</strong></h3>
              <h4 className='disc-sub-header'>click a tutor to see more details</h4>
            </section>
            <Card className='card-prop-d profile'>
                <img src={pic} className="profile-image"/>
                <div className='description'>
                  <h3 ><strong>John Doe</strong></h3>
                  <h3 className='s-header'>Mathematis, Science</h3>
                </div>
                <div>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />  
                </div>
            </Card>
            <Card className='card-prop-d profile'>
                <img src={pic} className="profile-image"/>
                <div className='description'>
                  <h3 ><strong>John Doe</strong></h3>
                  <h3 className='s-header'>Mathematis, Science</h3>
                </div>
                <div>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />  
                </div>
            </Card>
            <Card className='card-prop-d profile'>
                <img src={pic} className="profile-image"/>
                <div className='description'>
                  <h3 ><strong>John Doe</strong></h3>
                  <h3 className='s-header'>Mathematis, Science</h3>
                </div>
                <div>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse style={{  color: 'yellow' }}/>
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />
                  <FontAwesomeIcon className='r-icon' icon={faStar} inverse />  
                </div>
            </Card>
            <Card className='card-prop-d  b-profile'>
              <strong>Tutor Details</strong>              <hr/>
              <div className='profile'>
                <img src={pic} className="profile-image"/>
                <div className='description'>
                  <h3 ><strong>John Doe</strong></h3>
                  <h3 className='s-header'>Music, Chemistry</h3>
                </div>
                </div>  
                <div className='box-desc'>
                  <div className='years yellow'>
                  <h2 className='number'>6 </h2>
                    <h3 id='num-desc'>Years of Experience</h3>
                  </div>
                  <div className='years green-n'>
                    <h2 className='number'>6 </h2>
                    <h3 id='num-desc-2'>Hours Availability</h3>
                  </div>
                  <div className='years yellow'>
                  <h2 className='number'>6 </h2>
                    <h3 id='num-desc-3'>Years of Experience</h3>
                  </div>                  
                </div>
                <Button id="s-button">Select Tutor</Button>
            </Card>
            </Col>
            </Row>
        </Container>
        </div>

  )
}
export default Tutor;