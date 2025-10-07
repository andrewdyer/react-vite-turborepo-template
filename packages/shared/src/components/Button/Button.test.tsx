import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render button with children', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
