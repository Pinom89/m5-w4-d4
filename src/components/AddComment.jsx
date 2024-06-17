import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';

export default function AddComment( {creaRecensione, valoreInput, setValoreInput, rating, setRating} ) {
  return (
    <form className='d-flex flex-column justify-content-center align-items-center gap-2 mt-5'>
                    <MDBInput
                        type="text"
                        value={valoreInput}
                        onChange={(event) => setValoreInput(event.target.value)}
                        placeholder='inserisci una recensione'
                        required
                        autoFocus 
                    />
                     
                     <Form.Select 
                     className='mx-3'
                     value={rating} 
                     onChange={(event) => setRating(event.target.value)}
                     aria-label="Select rating"
                     required
                   >
                     <option value="" disabled>
                       Vota da 1 a 5
                     </option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                   </Form.Select> 
                    
                    <MDBBtn color='dark'
                        type="button"
                        onClick={creaRecensione} 
                    >   
                        Invia
                    </MDBBtn>
                   
                </form>
  )
}
