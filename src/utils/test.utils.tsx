import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from 'containers/ThemeProvider/ThemeProvider';

const AllTheProviders = (props: PropsWithChildren) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
