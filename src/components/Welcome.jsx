import React from 'react';
import {
  MDBContainer    
  } from 'mdb-react-ui-kit';


function Welcome() {
    return (
       <MDBContainer>
        <div data-mdb-alert-init="" className="alert alert-warning p-2 m-4" role="alert" data-mdb-color="warning" data-mdb-alert-initialized="true">
          <h2>Benvenuti nella Libreria più grande del web</h2>
        </div>
        </MDBContainer>
    )
    
}

export default Welcome