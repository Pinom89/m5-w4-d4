import React from 'react'
import { MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function CommentList( { elementolista, cancellaRecensione, modificadati } ) {
  return (
    <MDBListGroupItem   className='m-1 pb-2' key={elementolista._id}> {elementolista.comment} - <span>Voto</span> {elementolista.rate} 
   <br />
    <MDBBtn style={{ fontSize: '10px' }} className='me-1 ms-2 p-1'  color='danger'
     onClick={() => cancellaRecensione(elementolista._id)}>
   Cancella
  </MDBBtn>
 <MDBBtn className='me-1 p-1' style={{ fontSize: '10px' }} color='warning' 
 onClick={() => modificadati( elementolista._id,elementolista.elementId, prompt('aggiorna la recensione', elementolista.comment), prompt('aggiorna il voto da 1 a 5', elementolista.rate))}>
   Modifica
 </MDBBtn> 
 </MDBListGroupItem>
  )
}

