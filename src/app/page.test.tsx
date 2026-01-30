import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('Build Better Software')).toBeDefined();
  });

  it('renders the subtitle', () => {
    render(<Home />);
    expect(screen.getByText('The platform engineering teams trust.')).toBeDefined();
  });
});
