import { useParams, useNavigate } from "react-router-dom";
import fantasy from '../json/fantasy.json';
import history from '../json/history.json';
import horror from '../json/horror.json';
import romance from '../json/romance.json';
import scifi from '../json/scifi.json';
import CommentArea from './CommentArea';
import { MDBCard,  MDBCardImage, MDBBtn, MDBRipple, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


export default function BookDetails() {


    const navigate = useNavigate();

    const params = useParams();
    console.log(params);

    let bookstotali = [].concat(fantasy, history, horror, romance, scifi);
    console.log(bookstotali);
    let findbook = bookstotali.find((book) => book.asin === params.asin);
    console.log(findbook);
  return (
    <MDBContainer className="vh-100">
        <MDBRow className="d-flex justify-content-center align-items-start">
            <MDBCol  md='6' >
                <MDBCard className="p-5" >
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay d-flex flex-column justify-content-center align-items-center'>
                        <MDBCardImage src={findbook.img} fluid alt={findbook.title} style={{maxHeight: '300px', maxWidth: '300px'}} />
                    
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            <MDBBtn variant="dark" className="mt-3" onClick={() => navigate(`/`)}>Torna indietro</MDBBtn>
                    </MDBRipple>
                </MDBCard>
            </MDBCol> 
            <MDBCol  md='3' className="my-auto" >
            <ol  style={{textDecoration: 'none'}} class="list-group list-group">
                <li className="list-group-item">Titolo:{findbook.title}</li>
                <li class="list-group-item">Categoria:{findbook.category}</li>
                <li class="list-group-item">Costo: €{findbook.price}</li>
            </ol>
            </MDBCol>   
            <MDBCol  md='3' className="my-auto">
            <CommentArea className = "mt-3" asin={findbook.asin}/>
            </MDBCol>   
        </MDBRow>
    </MDBContainer>    


  )
}
