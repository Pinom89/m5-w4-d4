import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';





test('Testo presente in Welcome', () => {
    render(<Welcome />);
    const linkElement = screen.getByText(/App React Epicode/i);
    expect(linkElement).toBeInTheDocument();
});

test('conteggio elementi eseguita', async() => {
    render(<App />);
    const conteggio = await screen.findAllByTestId('pippo');
    expect(conteggio).toHaveLength(150);
});


test('verifica n. di card', () => {
  render(<App />);
  const cardTotal = screen.getAllByTestId('pippo');
  expect(cardTotal).toHaveLength(150);
})

test('commentArea si visualizza', async() => {
    render(<App />);
    const buttondetails = await screen.findAllByText('Book Details');
    fireEvent.click(buttondetails[0]);
    const comment = await screen.findByPlaceholderText('Inserisci qui il tuo commento');
    expect(comment).toBeInTheDocument();
});



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
/*

test("verifica lo stile del bordo rosso quando il libro è selezionato", async () => {
  render(<App />); // Renderizza il componente App che contiene SingleBook

  // Attendi che l'elemento con data-testid 'pippo' sia presente nel DOM
  const cardElement = await  waitFor(() => {screen.findByTestId('pippo')});

  // Simula il click sull'elemento Card per selezionarlo
  fireEvent.click(cardElement);

  // Attendi che lo stile del bordo rosso venga applicato
  await waitFor(() => {
    expect(cardElement).toHaveStyle('border: 2px solid red'); // Verifica che lo stile esatto corrisponda
  });
});



test("verifica lo stile del bordo rosso quando il libro è selezionato", async () => {
  render(<App />); // Renderizza il componente App che contiene SingleBook

  // Attendi che l'elemento con data-testid 'pippo' sia presente nel DOM
  const cardElement = await screen.findAllByTestId('pippo');

  // Simula il click sull'elemento Card per selezionarlo
  fireEvent.click(cardElement);

  // Attendi che lo stile del bordo rosso venga applicato
  await waitFor(() => {
    expect(cardElement).toHaveStyle('border: 2px solid red'); // Verifica che lo stile esatto corrisponda
  });
});
*/

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