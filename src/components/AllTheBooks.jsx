import { MDBCol, MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import SingleBook from './SingleBook';
import { useState } from 'react';
import CommentArea from './CommentArea';
import fantasy from '../json/fantasy.json';
import history from '../json/history.json';
import horror from '../json/horror.json';
import romance from '../json/romance.json';
import scifi from '../json/scifi.json';


// all'iterno della function card passo come props nelle graffe la props books(detto books) e la props search
export default function Card({search}) {  
        /* creo tramite useState un valore di partenza vuoto in quanto la barra di ricerca è vuota e si valorizzerò tramite la funzione SetSearch che andrà a prendere
         il value del componente cerca
    */ 
         let booksTotali = [].concat(fantasy, history, horror, romance, scifi);
         console.log(booksTotali.length);
         const [selected, setSelected] = useState(false);
         let [generes, setGeneres] = useState('standard');
         
       
        let books = generes === 'standard' ? booksTotali : generes === 'fantasy' ? fantasy : generes === 'horror' ? horror : generes === 'scifi' ? scifi : generes === 'history' ? history : romance; 
       
         // Verifica che books sia definito e sia un array
         if (!books || !Array.isArray(books)) {
          return <div>No books available</div>;
           }
           console.log(books);
         return (
    <>
      <MDBContainer > 
            <MDBRow className='mb-5'>
            <div className='d-flex justify-content-center align-items-center'>
          <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('fantasy')}>
            Fantasy
          </MDBBtn>
          <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('horror')}>
            Horror
          </MDBBtn>
          <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('scifi')}>
            Scifi
          </MDBBtn>
          <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('history')}>
            History
          </MDBBtn>
          <MDBBtn className='mx-2' color='dark' onClick={() => setGeneres('romance')}>
            Romance
          </MDBBtn>
        </div>
            </MDBRow>
              {/* trasferisco tramite props il campo book del map books in singlebook */}
            <MDBRow className='d-flex '>      
              <MDBCol md='9' className='d-flex flex-wrap gx-3 gap1'>
                {books 
                
                .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
                .map(book => (

                    <SingleBook selected={selected} setSelected={setSelected} book={book}/>
                ))}       
              </MDBCol>
              <MDBCol md='3'>

                <CommentArea asin={selected} />
 
              </MDBCol>  
            </MDBRow>
     </MDBContainer> 
    </>
  );
};
