import { render, screen } from '@testing-library/react';
import { Title } from './Title';

const testTitleContent = 'Test Title';

describe('Title Component', () => {
  it('renders children correctly', () => {
    render(<Title>{testTitleContent}</Title>);
    expect(screen.getByText(testTitleContent)).toBeDefined();
  });

  it('applies correct CSS classes', () => {
    render(<Title>{testTitleContent}</Title>);
    const titleElement = screen.getByText(testTitleContent);
    expect(titleElement?.className).toEqual('text-lg text-gray-600');
  });
});
