import React, { FC } from 'react';
import Button from './atoms/Button';
import Icon from './atoms/Icon';

type Props = {};

const RadioYoutube: FC<Props> = (props) => {
  return (
    <div className="box">
      <div className="title">
        Radio <Icon name="youtube-square" />
        YouTube
      </div>

      <div className="play-box">
        <div className="play-current">
          <img
            className="nes-avatar is-rounded is-medium music-play-spin"
            alt="Play radio"
            src="https://1.bp.blogspot.com/-RgJWXm0t7q0/XIWTSUvY40I/AAAAAAAAIj0/YMDr1bdHzBsryvSU8CEGeSGNlqPh3axlQCK4BGAYYCw/s1600/music%2Bicons.png"
            style={{ imageRendering: 'pixelated' }}
          />
          <p>Rick Astley - Never Gonna Give You Up (Official Music Video)</p>
        </div>

        <div className="play-time">15:00 / 20:00</div>

        <div className="play-action">
          <Button>
            <Icon name="caret-left" />
          </Button>
          <Button>
            <Icon name="pause" />
          </Button>
          <Button>
            <Icon name="caret-right" />
          </Button>
        </div>
      </div>

      <div className="music-list">
        <div className="music-item">
          <Button>
            <Icon name="pause" />
          </Button>
          <p>NOW PLAYING lofi hip hop radio - beats to relax/study to</p>
        </div>

        <div className="music-item">
          <Button color="_">
            <Icon name="play" />
          </Button>
          <p>NOW PLAYING lofi hip hop radio - beats to relax/study to</p>
        </div>

        <div className="music-item">
          <Button color="_">
            <Icon name="play" />
          </Button>
          <p>NOW PLAYING lofi hip hop radio - beats to relax/study to</p>
        </div>
      </div>
    </div>
  );
};

export default RadioYoutube;
