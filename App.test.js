import { render, screen, fireEvent, waitFor, getAllByRole, findAllByRole} from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

// NB il file di App.test.js è stato messo esternamente al progetto in quanto è stato effettuato sulla base del progetto scritto dal Prof Umberto Emanuele
// TUTTI i test sono funzionanti e sono state inserite delle alternative.
// per testare questo file spostarlo nel progetto argomentato dal Prof.

/*
// test 1
test('Testo presente in Welcome', () => {
    render(<Welcome />);
    const linkElement = screen.getByText(/App React Epicode/i);
    expect(linkElement).toBeInTheDocument();
});
*/


/*
// test 2
test('conteggio elementi eseguita', async() => {
    render(<App />);
    const conteggio = await screen.findAllByTestId('pippo');
    expect(conteggio).toHaveLength(150);
});
*/

/*
// test 2 alternativa
test('verifica n. di card', () => {
  render(<App />);
  const cardTotal = screen.getAllByTestId('pippo');
  expect(cardTotal).toHaveLength(150);
})
*/

/*
// test 3
test('commentArea si visualizza', async() => {
    render(<App />);
    const buttondetails = await screen.findAllByText('Book Details');
    fireEvent.click(buttondetails[0]);
    const comment = await screen.findByPlaceholderText('Inserisci qui il tuo commento');
    expect(comment).toBeInTheDocument();
});
*/
 
/*
// test 4
test("filtra i libri in base alla ricerca", async () => {
  // Renderizziamo il componente App
  render(<App />);

  // Usiamo screen.getByPlaceholderText per trovare l'input di ricerca tramite il suo placeholder
  const searchInput = screen.getByPlaceholderText(/Cerca un libro.../i);

  // Simuliamo un evento di cambio valore sull'input di ricerca
  fireEvent.change(searchInput, { target: { value: 'staked' } });

  // Attendi che gli elementi vengano caricati nel DOM
  await waitFor(() => {
    // Cerchiamo tutti gli elementi che corrispondono al testo "Book Details"
    const filteredElements = screen.getAllByText(/Book Details/i);

    // Verifichiamo che ci sia almeno un elemento filtrato
    expect(filteredElements).toHaveLength(1);

    // Verifichiamo che l'elemento filtrato contenga il testo "Stiletto"
   
  });
});
*/

/*
test 5
test('verifica lo stile del bordo rosso quando il libro è selezionato', async () => {
  render(<App />); // Renderizza il componente App che contiene SingleBook

  // Attendi che gli elementi con data-testid 'pippo' siano presenti nel DOM
  const idElements = await screen.findAllByTestId('pippo');
 
  const element = idElements[0];

  // Simula il click sul primo elemento Card per selezionarlo
  fireEvent.click(element);

  // Verifica che la classe 'selezionata' sia presente sull'elemento
  expect(element).toHaveClass('selezionata');
});

*/

/*
// test 6 
test('verifica stato del bordo rosso', async () => {
  render(<App />); // Renderizza il componente App che contiene SingleBook

  // Attendi che gli elementi con data-testid 'pippo' siano presenti nel DOM
  const idElements = await screen.findAllByTestId('pippo');
 
  const elementUno = idElements[0];
  const elementDue = idElements[1];

  // Simulo il click sul primo elemento Card per selezionarlo
  fireEvent.click(elementUno);

  // Verifica che la classe 'selezionata' sia presente sull'elemento
  expect(elementUno).toHaveClass('selezionata');

  // Simulo il click sul secondo elemento Card per selezionarlo
  fireEvent.click(elementDue);

  expect(elementUno).not.toHaveClass('selezionata');
  expect(elementDue).toHaveClass('selezionata');

});

*/


/*
//test 7

test ('non è presente SingleComment', () => {
  render(<App />);
  const comment = screen.queryByTestId('single comment');
  expect(comment).toBeNull();
})

*/

/*
// test 7 alternativa
test ('non è presente SingleComment', () => {
  render(<App />);
  const comment = screen.queryAllByTestId('single comment');
  expect(comment).toHaveLength(0);
})
*/


/*
// test 8
test('i commenti sono presenti', async() => {
  render(<App />);
  const buttons = await screen.findAllByRole('button', {name: /Book Details/i });
  const FirstButton = buttons[0];
  fireEvent.click(FirstButton);
  const PrimoComment = await screen.findAllByTestId('single comment');
  expect(PrimoComment[0]).toBeInTheDocument();
})
  */


// test 8 alternativa
test('i commenti sono presenti', async() => {
  render(<App />);
  const buttons =  screen.getAllByRole('button', {name: /Book Details/i });
  const FirstButton = buttons[0];
  fireEvent.click(FirstButton);
  const PrimoComment = await screen.findAllByTestId('single comment');
  expect(PrimoComment).toHaveLength(3);
})


