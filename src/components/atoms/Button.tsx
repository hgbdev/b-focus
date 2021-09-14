import React, { ButtonHTMLAttributes, FC, HTMLProps, useEffect } from 'react';

type Props = {
	color?: string;
};

const Button: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

	const { children, color, ...rest } = props;

	return (
		<button
			type="button"
			className={`nes-btn is-${color || 'primary'}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
