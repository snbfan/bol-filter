import { render, screen } from '@testing-library/react';
import { WarningMessage } from './WarningMessage';

const warningMessageContent = 'Test Warning';

describe('WarningMessage Component', () => {
  it('renders children correctly', () => {
    render(
      <WarningMessage>
        {warningMessageContent}
      </WarningMessage>
    );
    expect(screen.getByText(warningMessageContent)).toBeDefined();
  });

  it('has the correct role and aria-live attribute', () => {
    render(
      <WarningMessage>
        {warningMessageContent}
      </WarningMessage>
    );
    const warningElement = screen.getByText(warningMessageContent);
    expect(warningElement.getAttribute('role')).toEqual('alert');
    expect(warningElement.getAttribute('aria-live')).toEqual('polite');
  });

  it('applies correct CSS classes', () => {
    render(
      <WarningMessage>
        {warningMessageContent}
      </WarningMessage>
    );
    const warningElement = screen.getByText(warningMessageContent);
    expect(warningElement?.className).toEqual('text-md text-gray-600');
  });
});
