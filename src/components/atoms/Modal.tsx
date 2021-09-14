import React, { FC } from 'react';

import Button from './Button';

type Props = {
  visible: boolean;
  title: string | JSX.Element;
  onCancel(): void;
  onOk(): void;
};

const Modal: FC<Props> = (props) => {
  const { children, visible, title, onCancel, onOk } = props;

  if (!visible) return null;
  return (
    <div className="modal-root">
      <div className="modal-box">
        <form method="dialog">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-menu">
            <Button onClick={() => onCancel()} className="nes-btn">
              Cancel
            </Button>
            <Button onClick={() => onOk()}>Confirm</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
