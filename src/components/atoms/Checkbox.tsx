import React, { FC, InputHTMLAttributes } from 'react';

type Props = {
  label: string;
};

const Checkbox: FC<Props & InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { label, ...rest } = props;
  return (
    <label>
      <input type="checkbox" className="nes-checkbox" {...rest} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
