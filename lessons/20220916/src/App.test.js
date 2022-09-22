import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders calculation component', () => {
  render(<App />);

  const subtractOne = screen.getByLabelText('subtract-one');
  const addOne = screen.getByLabelText('add-one');
  const subtractHundred = screen.getByLabelText('subtract-hundred');
  const addHundred = screen.getByLabelText('add-hundred');
  const currentValue = screen.getByLabelText('current-value');

  expect(subtractOne).toBeInTheDocument();
  expect(addOne).toBeInTheDocument();
  expect(subtractHundred).toBeInTheDocument();
  expect(addHundred).toBeInTheDocument();
  expect(currentValue).toBeInTheDocument();
});

test('verifies calculation results', () => {
  render(<App />);

  const subtractOne = screen.getByLabelText('subtract-one');
  const addOne = screen.getByLabelText('add-one');
  const subtractHundred = screen.getByLabelText('subtract-hundred');
  const addHundred = screen.getByLabelText('add-hundred');
  const currentValue = screen.getByLabelText('current-value');

  fireEvent.click(subtractOne);
  expect(currentValue.textContent).toBe('-1');

  fireEvent.click(addOne);
  expect(currentValue.textContent).toBe('0');

  fireEvent.click(subtractHundred);
  expect(currentValue.textContent).toBe('-100');

  fireEvent.click(addHundred);
  expect(currentValue.textContent).toBe('0');
});

test('renders display input component', () => {
  render(<App />);

  const inputText = screen.getByLabelText('input-text');
  const displayText = screen.getByLabelText('display-text');

  expect(inputText).toBeInTheDocument();
  expect(displayText).toBeInTheDocument();
});

test('verifies display input results', () => {
  render(<App />);

  const inputText = screen.getByTestId('input-text-id');
  const displayText = screen.getByLabelText('display-text');

  fireEvent.change(inputText, {
    target: {
      value: 'qwerty'
    }
  });
  expect(inputText.value).toBe('qwerty');
  expect(displayText.textContent).toBe('qwerty');
});
