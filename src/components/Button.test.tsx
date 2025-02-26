import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with children text', () => {
    render(<Button onButtonClick={() => {}} ariaLabel="test-button">Click Me</Button>);
    expect(screen.getByRole('button', { name: 'test-button' }).textContent).toEqual('Click Me');
  });

  it('calls the onButtonClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onButtonClick={handleClick} ariaLabel="click-button">Click Me</Button>);

    const button = screen.getByRole('button', { name: 'click-button' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has the correct default classes', () => {
    render(<Button onButtonClick={() => {}} ariaLabel="class-check">Click Me</Button>);
    const button = screen.getByRole('button', { name: 'class-check' });

    expect(button.className).toEqual('w-full mt-4 p-2 bg-bolblue text-white cursor-pointer rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none');
  });
});