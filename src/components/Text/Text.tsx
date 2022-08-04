import React, { PropsWithChildren } from "react";

interface TextProps {}

const Text = (props: PropsWithChildren<TextProps>) => {
  return <p>{props.children}</p>;
};

export default Text;
