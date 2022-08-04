import React, { PropsWithChildren } from "react";

export interface BoxProps {}

const Box = (props: PropsWithChildren<BoxProps>) => {
  return <div>{props.children}</div>;
};

export { Box };
