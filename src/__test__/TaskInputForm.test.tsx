// 5 of 5 passes atm
import { render, screen, fireEvent } from '@testing-library/react';
import TaskInputForm from '@/components/TaskInputForm/TaskInputForm'

test('Renders input form with description and category fields', () => {
  render(<TaskInputForm onAddTask={jest.fn()} />);
  expect(screen.getByLabelText(/task description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
});

test('Submits the form with valid data', () => {
  const mockAddTask = jest.fn(); // same as the one above!
  render(<TaskInputForm onAddTask={mockAddTask} />); // same as empty function

  fireEvent.change(screen.getByLabelText(/task description/i), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Personal' } });
  fireEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(mockAddTask).toHaveBeenCalledWith('Test Task', 'Personal');
});

test('Does not submit the form with empty description', () => {
  const mockAddTask = jest.fn();
  render(<TaskInputForm onAddTask={mockAddTask} />);

  fireEvent.change(screen.getByLabelText(/task description/i), { target: { value: '' } }); // onchange event update state
  fireEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(mockAddTask).not.toHaveBeenCalled();
});

test('Does not submit the form with a description that is too short', () => {
  const mockAddTask = jest.fn();
  render(<TaskInputForm onAddTask={mockAddTask} />);

  fireEvent.change(screen.getByLabelText(/task description/i), { target: { value: 'Hi'}});
  fireEvent.click(screen.getByRole('button', { name: /add task/i}));

  expect(mockAddTask).not.toHaveBeenCalledWith();
});

test('Changes task category correctly', () => {
  const mockAddTask = jest.fn();
  render(<TaskInputForm onAddTask={mockAddTask} />);

  fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Personal' }});
  expect(screen.getByLabelText(/category/i)).toHaveValue('Personal');
});
