import React, { PropsWithChildren } from 'react';

const ThemeProvider = (props: PropsWithChildren) => {
  return <>{props.children}</>;
};

export default ThemeProvider;
