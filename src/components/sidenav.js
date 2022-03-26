import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faHouse, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import './sidenav.css'

export const Sidenav=()=> {
  return (
    <>
        <SideNav 
        expanded={true}
        className="side-background">
              
             {/* <SideNav.Toggle
             disabled={true} /> */}
            
                <SideNav.Nav  defaultSelected="home" >
                    <h3 className='brand'> <a href="/">TUSO<strong>ME</strong></a></h3>
                    <NavItem  eventKey="home"  >
                        <NavIcon>
                            <FontAwesomeIcon icon={faHouse} style={{  color: 'black' }}/>
                        </NavIcon>
                        <NavText  id="text">
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="examination">
                        <NavIcon>
                        <FontAwesomeIcon icon={faSuitcase} style={{  color: 'black' }}/>
                        </NavIcon>
                        <NavText id="text">
                            Examination
                        </NavText>
                                    
                    </NavItem>
                    <NavItem eventKey="course" className="text">
                        <NavIcon>
                        <FontAwesomeIcon icon={faSchool} style={{  color: 'black' }}/>
                        </NavIcon>
                        <NavText id="text">
                            Caurse
                        </NavText>
                                    
                    </NavItem>
                    <NavItem eventKey="profile">
                        <NavIcon>
                        <FontAwesomeIcon icon={faUser} style={{  color: 'black' }}/>
                        </NavIcon>
                        <NavText id="text">
                            Profile
                        </NavText>      
                    </NavItem>
                </SideNav.Nav>
                <div className="vertical"></div>  
            </SideNav>
            

    </>
  )
}

