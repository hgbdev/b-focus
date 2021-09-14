import React, { FC } from 'react';

type Props = {
  src: string;
  size?: string;
  type?: string;
};

const Avatar: FC<Props> = (props) => {
  const { src, size, type } = props;
  return (
    <img
      className={`nes-avatar is-${type || 'rounded'} is-${size || 'large'}`}
      alt="Avatar"
      src={src}
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default Avatar;
