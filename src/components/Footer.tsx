//edited
import React, { FC } from 'react';

import Typewriter from 'typewriter-effect';

import Avatar from './atoms/Avatar';
import Icon from './atoms/Icon';
//test
type Props = {};

const Footer: FC<Props> = (props) => {
  return (
    <div className="root">
      <div className="nes-balloon from-left nes-pointer">
        <p>
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter
                .typeString(
                  'Success is not final; failure is not fatal: It is the courage to continue that counts'
                )
                .start();
            }}
          />
        </p>
      </div>
      <i className="nes-mario"></i>
      <p className="my-name">@Gia-Boi Huynh</p>
    </div>
  );
};

export default Footer;
