import React, { FC, useState } from 'react';

import Button from './atoms/Button';
import Icon from './atoms/Icon';
import Modal from './atoms/Modal';

interface Props {}

const Header: FC<Props> = (props) => {
  const [visibleModalPoint, setVisibleModalPoint] = useState(false);

  return (
    <>
      <div className="root">
        <div className="logo" style={{ fontSize: 24 }}>
          B-Focus
        </div>
        <div className="settings">
          <a onClick={() => setVisibleModalPoint(!visibleModalPoint)}>
            0 <Icon name="trophy" />
          </a>
        </div>
      </div>

      <Modal
        title={
          <>
            Point <Icon name="trophy" />
          </>
        }
        onCancel={() => setVisibleModalPoint(false)}
        onOk={() => setVisibleModalPoint(false)}
        visible={visibleModalPoint}
      >
        Is the number of points you accumulate over the time Pomodoro you make
      </Modal>
    </>
  );
};

export default Header;
