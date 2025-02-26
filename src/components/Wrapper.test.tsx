import { render, screen } from '@testing-library/react';
import { Wrapper } from './Wrapper';

describe('Wrapper Component', () => {
  it('renders children correctly', () => {
    render(
      <Wrapper>
        <p>Test Content</p>
      </Wrapper>
    );
    expect(screen.getByText('Test Content')).toBeDefined();
  });

  it('applies correct CSS classes', () => {
    render(
      <Wrapper>
        <p>Test Content</p>
      </Wrapper>
    );
    const wrapperDiv = screen.getByText('Test Content').parentElement;
    expect(wrapperDiv?.className).toEqual('xs:w-100 md:w-80 px-6 pt-4 pb-6 m-4 bg-gray-50 rounded-md border-1 border-gray-300');
  });
});