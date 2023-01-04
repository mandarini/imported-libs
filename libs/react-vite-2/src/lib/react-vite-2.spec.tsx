import { render } from '@testing-library/react';

import ReactVite2 from './react-vite-2';

describe('ReactVite2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactVite2 />);
    expect(baseElement).toBeTruthy();
  });
});
