import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Welcome from './components/Welcome';
import App from './App';
import allBooks from './json/allBooks.json';

test('Testo presente in Welcome', () => {
    render(<Welcome />);
    const linkElement = screen.getByText(/Benvenuti nella Libreria più grande del web/i);
    expect(linkElement).toBeInTheDocument();
});

test('conteggio elementi eseguita', async() => {
    render(<App />);
    const conteggio = await screen.findAllByTestId('pippo');
    expect(conteggio).toHaveLength(150);
});


/*
test('Testo presente in About', () => {
    render(<App />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});*/