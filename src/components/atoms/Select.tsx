import React, { FC } from 'react';

type Props = {
  id: string;
  label: string;
  value: string | number;
  placeholder: string;
};

const Select: FC<Props> = (props) => {
  const { id, label, value, placeholder, children, ...rest } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="nes-select" style={{ marginBottom: 30 }}>
        <select
          required
          placeholder={placeholder}
          value={value}
          id={id}
          {...rest}
        >
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;

type OptionProps = {
  label: string;
  value: string | number;
};

export const Option: FC<OptionProps> = (props) => {
  const { label, value, ...rest } = props;
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};
