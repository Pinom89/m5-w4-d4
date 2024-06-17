
import React, { useState, useEffect } from 'react';
import { MDBSpinner, MDBListGroupItem } from 'mdb-react-ui-kit';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default function CommentArea({asin }) {
    
    const [lista, setLista] = useState([]);
    const [valoreInput, setValoreInput] = useState("");
    const [caricamento, setCaricamento] = useState(false);
    const [rating, setRating] = useState("");
    const Urlget= `https://striveschool-api.herokuapp.com/api/books/`
    

    

    // Read (GET)
    useEffect(() => {
        function commenti() {
            
        
        setCaricamento(true);    
        
    fetch(Urlget+asin+'/comments', {
    headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDI1ODBiM2IyNTAwMTUxYjU0MWIiLCJpYXQiOjE3MTcxMDQwNjIsImV4cCI6MTcxODMxMzY2Mn0.1steCqs3tf0KLGEVnooqgdDUhJ28DDKP1DaND8VsA7M"
    }
    })
    .then(response => response.json())
    .then(data =>
         setLista(data))
    .catch(error => console.error(error))
    .finally(() => {
        setCaricamento(false);
    });
}
commenti();
    }, [asin, Urlget])

  


//  CREATE - post
const creaRecensione = () => {
    if (!valoreInput.trim() || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Parametro non valido, riprovare");
    setValoreInput(""); // resetto il valore recensione
    setRating("");// resetto il valore rating
    return; // esci dalla funzione
  }

    const nuovaRecensione = { 
            comment: valoreInput,
            rate: rating,
            elementId: asin,
     };

    setCaricamento(true); // Mostro l'indicatore di caricamento

    // Fetch
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDI1ODBiM2IyNTAwMTUxYjU0MWIiLCJpYXQiOjE3MTcxMDQwNjIsImV4cCI6MTcxODMxMzY2Mn0.1steCqs3tf0KLGEVnooqgdDUhJ28DDKP1DaND8VsA7M",
         'Content-Type': 'application/json',
       }, 
      body: JSON.stringify(nuovaRecensione),
    })
      .then((response) => response.json()) // Convertiamo la risposta in JSON
      .then((data) => {
        setLista([...lista, data]); // Aggiungo la nuova toDo alla lista esistente di toDo
        setValoreInput(""); // resetto il valore recensione
        setRating("");// resetto il valore rating
      })
      .catch((error) =>
        console.error("Errore nella crazione della ToDo:", error)
      )
      .finally(() => {
        setCaricamento(false);
      });
 } ;


const modificadati = (_id, elementId, commentupdate, rateupdate) => {
    const RecensioneModificata = {
        comment: commentupdate,
        rate: rateupdate,
        elementId: elementId
    };

    console.log('Dati della recensione modificata:', RecensioneModificata);
    setCaricamento(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${_id}`,
     {
        method: "PUT",
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDI1ODBiM2IyNTAwMTUxYjU0MWIiLCJpYXQiOjE3MTcxMDQwNjIsImV4cCI6MTcxODMxMzY2Mn0.1steCqs3tf0KLGEVnooqgdDUhJ28DDKP1DaND8VsA7M",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(RecensioneModificata),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Errore HTTP! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Risposta dell\'API:', data);
        setLista(lista.map((elementolista) =>
            elementolista._id === _id ? data : elementolista
        ));
    })
    .catch(error => console.error('Errore durante la modifica della recensione:', error))
    .finally(() => {
        setCaricamento(false);
    });
};
const cancellaRecensione = (_id) => {
    setCaricamento(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${_id}`, {
        method: "DELETE",
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDI1ODBiM2IyNTAwMTUxYjU0MWIiLCJpYXQiOjE3MTcxMDQwNjIsImV4cCI6MTcxODMxMzY2Mn0.1steCqs3tf0KLGEVnooqgdDUhJ28DDKP1DaND8VsA7M",
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Errore HTTP! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Risposta dell\'API:', data);
        setLista(lista.filter((elementolista) => elementolista._id !== _id));
    })
    .catch(error => console.error('Errore durante la cancellazione della recensione:', error))
    .finally(() => {
        setCaricamento(false);
    });
};





    return (
        <>
            
                <AddComment setValoreInput={setValoreInput} valoreInput={valoreInput} setRating={setRating} rating={rating} creaRecensione={creaRecensione} />
                    <h6 className='mt-1'>Recensioni</h6>
            <div className="square border border-secondary">
                <div className='flex-column justify-content-start align-items-center gap-1'>
                
                    {caricamento && <div> <MDBSpinner color='primary'>
                    <span className='visually-hidden'>Caricamento...</span>
                    </MDBSpinner> </div> }
                    <MDBListGroupItem className='m-1'>
                        {lista.map((elementolista) => (
                        <CommentList elementolista={elementolista} modificadati={modificadati} cancellaRecensione={cancellaRecensione} />
                        ))}
                    </MDBListGroupItem>


                </div>
            </div>
        
        </>
    )
}
