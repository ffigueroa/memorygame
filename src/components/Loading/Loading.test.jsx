/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from './Loading';

describe('Loading', () => {
  test('should render with correct props', () => {
    render(<Loading />);

    const loadingImage = screen.getByAltText(/loading/i);

    expect(loadingImage).toBeInTheDocument();
    expect(loadingImage.getAttribute('src')).toEqual('/images/loading.svg');
    expect(loadingImage.getAttribute('width')).toEqual('100');
  });
});
