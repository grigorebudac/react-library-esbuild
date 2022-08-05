import React, { PropsWithChildren } from 'react';

export interface BoxProps {
  example?: string;
}

const Box = (props: PropsWithChildren<BoxProps>) => {
  return <div>{props.children}</div>;
};

export { Box };
