import { render } from '@testing-library/react';

import ReactVite from './react-vite';

describe('ReactVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactVite />);
    expect(baseElement).toBeTruthy();
  });
});
