import { render } from '@testing-library/react';

import ReactRollup from './react-rollup';

describe('ReactRollup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollup />);
    expect(baseElement).toBeTruthy();
  });
});
