import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Root from '../../components/page-components/root/Root';

describe('root component', () => {
  it('renders root', () => {
    render(<Root />);
    const header = screen.getByRole('heading');

    expect(header.textContent).toBe('Hello World!');
  });
});
