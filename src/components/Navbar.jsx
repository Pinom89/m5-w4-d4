

import React, { useContext } from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import {
  
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import Cerca from './Cerca';
import { ThemeContext } from '../modules/Contexts';
import { NavLink } from 'react-router-dom';

export default function Navbar({handleInputChange, search}) {

  
  let [theme, setTheme] = useContext(ThemeContext); // richiamo la funzione del context senza passare più le props

 
  return (
    <>
    <BootstrapNavbar expand='lg' bg={theme} >
      <MDBContainer fluid className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <NavLink  style={theme === 'light' ? {fontWeight:'Bold', textDecoration: 'none', color: 'black'} : {fontWeight:'Bold', textDecoration: 'none', color: 'white'}} to='/' className='mx-3' >
                  Epibook
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <NavLink className='mx-3 mt-5' style={theme === 'light' ? {fontWeight:'Bold', textDecoration: 'none', color: 'black'} : {fontWeight:'Bold', textDecoration: 'none', color: 'white'}} to='/'>
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink style={theme === 'light' ? {fontWeight:'Bold', textDecoration: 'none', color: 'black'} : {fontWeight:'Bold', textDecoration: 'none', color: 'white'}}  to='/about'>
                  About
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
         
        </div>
        {/* Componente Cerca e pulsante per il tema */}
        <div className='d-flex align-items-baseline justify-content-center'>
          <Cerca handleInputChange={handleInputChange} search={search} />
          <MDBBtn className='text-dark m-1' color='light' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <MDBIcon far icon="moon" />
          </MDBBtn>
        </div>
      </MDBContainer>
    </BootstrapNavbar>
</>
);
}
