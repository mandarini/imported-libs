import { render } from '@testing-library/react';

import ReactRollup2 from './react-rollup-2';

describe('ReactRollup2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollup2 />);
    expect(baseElement).toBeTruthy();
  });
});
