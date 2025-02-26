import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryItem } from './CategoryItem';

describe('CategoryItem Component', () => {
  const mockItem = { name: 'Electronics', favorite: false };
  const mockOnCategorySelect = jest.fn();

  it('renders the category item with correct label', () => {
    render(<CategoryItem item={mockItem} onCategorySelect={mockOnCategorySelect} />);
    expect(screen.getByLabelText(mockItem.name)).toBeDefined();
  });

  it('checkbox reflects the favorite state', () => {
    render(<CategoryItem item={{ ...mockItem, favorite: true }} onCategorySelect={mockOnCategorySelect} />);
    expect(screen.getByRole('checkbox', { name: mockItem.name }).getAttribute('aria-checked')).toEqual('true');
  });

  it('calls onCategorySelect when checkbox is clicked', () => {
    render(<CategoryItem item={mockItem} onCategorySelect={mockOnCategorySelect} />);
    const checkbox = screen.getByRole('checkbox', { name: mockItem.name });
    fireEvent.click(checkbox);
    expect(mockOnCategorySelect).toHaveBeenCalledWith(mockItem.name);
  });

  it('applies correct text color based on favorite state', () => {
    const { rerender } = render(<CategoryItem item={mockItem} onCategorySelect={mockOnCategorySelect} />);
    expect(screen.getByText(mockItem.name).className.includes('text-gray-700')).toBeTruthy();

    rerender(<CategoryItem item={{ ...mockItem, favorite: true }} onCategorySelect={mockOnCategorySelect} />);
    expect(screen.getByText(mockItem.name).className.includes('text-bolblue')).toBeTruthy();
  });
});
