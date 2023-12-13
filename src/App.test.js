// src/App.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders Zoo UI and DataList component', async () => {
    render(<App />);

    // Wait for the DataList component to be rendered
    await waitFor(() => {
      expect(screen.getByText('Zoo UI')).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('Data from Zoo Search API:')).toBeInTheDocument();
    });
  });
});
