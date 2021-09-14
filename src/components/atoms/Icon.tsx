import React, { FC } from 'react';

type Props = {
  name: string;
  size?: string;
};

const Icon: FC<Props> = (props) => {
  const { name, size } = props;
  return <i className={`nes-icon ${name} is-${size || 'small'}`}></i>;
};

export default Icon;
