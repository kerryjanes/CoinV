// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinV title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinV/i);
    expect(titleElement).toBeInTheDocument();
});
