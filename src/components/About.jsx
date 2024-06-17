import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function About() {
  return (
    <Container fluid className="py-2 vh-80">
    <Row className="d-flex  flex-column justify-content-center align-items-center">
      <Col md={6} >

        <Image
          className="vh-50 rounded-circle border-0 my-3" 
          src="https://images.unsplash.com/photo-1600431521340-491eca880813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D"
          alt="Libreria Online"
        />
      </Col>

     <Col md={6}>
        <p className='mt-4'>
          Siamo un'appassionata libreria online con una vasta selezione di libri
          per tutti i gusti. Offriamo una varietà di generi, tra cui narrativa,
          saggistica, gialli, fantasy, per bambini e molto altro.
        </p>
        <p>
          Il nostro obiettivo è quello di fornire ai nostri clienti un'esperienza
          di acquisto piacevole e facile. Offriamo spedizioni rapide e gratuite
          su tutti gli ordini superiori a <strong>€ 29,99</strong>. Inoltre, offriamo una
          politica di reso facile e veloce.
        </p>
        <p>
          Siamo amanti dei libri e crediamo nel potere della lettura. Vogliamo
          incoraggiare tutti a leggere di più e scoprire la gioia della lettura.
        </p>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col md={4}  className='mt-5'>
        <h3>La nostra storia</h3>
        <p>
          La libreria del web è stata fondata nel 1989 da Luca Raid.
        </p>
      </Col>
      <Col md={4} className='mt-5'>
        <h3>Il nostro team</h3>
        <p>
          Il nostro team è composto da appassionati di libri con una vasta
          conoscenza del settore editoriale. Siamo sempre pronti ad aiutarti
          a trovare il libro perfetto per te.
        </p>
      </Col>
      <Col md={4} className='mt-5'>
        <h3>Contattaci</h3>
        <p>
          Se hai domande o commenti, non esitare a contattarci. Puoi
          inviarci un'e-mail a <strong>libreriadelweb@epibook.it</strong>  o chiamarci al <strong> +39 02/4123456</strong>.
        </p>
      </Col>
    </Row>
  </Container>
  )
}
