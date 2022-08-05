import React from 'react';
import { Text } from './Text';

import { render } from 'utils/test.utils';

describe('<Text />', () => {
  it('Should render the children', async () => {
    const children = 'Hello World';
    const { findByText } = render(<Text>{children}</Text>);

    const element = await findByText(children);

    expect(element).not.toBeNull();
  });

  it('Should display the color correctly', async () => {
    const children = 'Hello World';
    const color = 'blue';

    const { findByText } = render(<Text color={color}>{children}</Text>);

    const element = await findByText(children);

    expect(element.style.color).toBe(color);
  });
});
