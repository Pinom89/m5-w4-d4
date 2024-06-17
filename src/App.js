import './App.css';
import  { useState} from 'react';
import { ThemeContext } from './modules/Contexts.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllTheBooks from './components/AllTheBooks.jsx';
import Navbar from './components/Navbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';
import BookDetails from './components/BookDetails.jsx';
import NotFound from './components/NotFound.jsx';
import About from './components/About.jsx';




// ho importato il componente ThemeContext da contexts.js che andrà inserito sempre tra le graffe


function App() {

  // creo contenitore ingnettabile utilizzabile per hook  Constext
  let [theme, setheme] = useState('dark');


  // logica per la barra di ricerca
  const [search, setSearch] = useState('')
  
  // definisco con la constante handleInputChange che andrà a prendere il value del componente cerca
  // ogni qualvolta verrà digitato un carattere sulla tastiera presente nel componente NavBar.jsx
  const handleInputChange = (e) => {
    setSearch(e.target.value);

  }

  // fine logica
 
  return (
    <div className="App">
    <ThemeContext.Provider value={[theme, setheme]}>
      <Router>
        
        <Navbar handleInputChange={handleInputChange} search={search} />
       
        <Welcome />
      
        <Routes>
          <Route 
            path="/" 
            element={<AllTheBooks search={search} />} 
          />
          <Route 
            path="/detailsbooks/:asin" 
            element={<BookDetails />} 
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
           <Route 
            path="/about"
            element={<About />} 
          />
        </Routes>
        
        <MyFooter />
      </Router>
    </ThemeContext.Provider>
  </div>
   
  );
}

export default App;
