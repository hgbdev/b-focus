import React, { FC, useCallback, useMemo, useState } from 'react';
import { pad2 } from '../utils/functions';
import { countDown, formatTime, TIME_START } from '../utils/pomodoro';
import Button from './atoms/Button';
import Checkbox from './atoms/Checkbox';
import Icon from './atoms/Icon';
import Modal from './atoms/Modal';
import Select, { Option } from './atoms/Select';

type Props = {};

const Pomodoro: FC<Props> = () => {
  const [timerStart, setTimerStart] = useState<number>(
    TIME_START.POMODORO || 25 * 60
  );
  const [timer, setTimer] = useState<number>(timerStart);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const [visibleModalMenu, setVisibleModalMenu] = useState<boolean>(false);

  const [turns, setTurns] = useState<number>(0);

  const currentTimeDisplay = useMemo(() => formatTime(timer), [timer]);

  const handleStartTimer = useCallback(() => {
    if (!timerInterval) {
      setTimerInterval(
        setInterval(() => {
          setTimer((prevTimer) => {
            const currentTime = countDown(prevTimer);
            const currentTimeTitle = formatTime(currentTime);
            document.title = `${pad2(currentTimeTitle.minutes)}:${pad2(
              currentTimeTitle.seconds
            )} | B-Focus`;
            return countDown(prevTimer);
          });
        }, 1000)
      );
    }
  }, [timerInterval]);

  /* ------------------------------------ / ----------------------------------- */
  const handleStopTimer = useCallback(() => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimer(TIME_START.POMODORO);
      setTimerInterval(null);
      document.title = `B-Focus`;
    }
  }, [timerInterval]);

  return (
    <>
      <div className="box">
        <div className="list">
          <Button>Pomodoro</Button>
          <Button>Short Break</Button>
          <Button>Long Break</Button>
        </div>

        <div className="timer">
          {pad2(currentTimeDisplay.minutes)}:{pad2(currentTimeDisplay.seconds)}
        </div>

        <div className="status">Time for work!</div>

        <div className="progress">
          <progress
            className="nes-progress is-primary"
            value={(TIME_START.POMODORO - timer).toString()}
            max={TIME_START.POMODORO.toString()}
          ></progress>
        </div>

        <div className="action">
          {timerInterval ? (
            <Button onClick={() => handleStopTimer()}>Stop</Button>
          ) : (
            <Button onClick={() => handleStartTimer()}>Start</Button>
          )}
          <Button onClick={() => setVisibleModalMenu(true)}>
            <Icon name="bars" />
          </Button>
        </div>
      </div>
      <Modal
        title={<>Settings</>}
        onCancel={() => setVisibleModalMenu(false)}
        onOk={() => setVisibleModalMenu(false)}
        visible={visibleModalMenu}
      >
        <Select
          id="pomodoro_time"
          label="Pomodoro time"
          value={30}
          placeholder="asds"
        >
          <Option label="25 minutes" value={25} />
          <Option label="30 minutes" value={30} />
          <Option label="35 minutes" value={35} />
          <Option label="40 minutes" value={40} />
          <Option label="45 minutes" value={45} />
        </Select>

        <Select
          id="short_break_time"
          label="Short break time"
          value={5}
          placeholder="asds"
        >
          <Option label="5 minutes" value={5} />
          <Option label="10 minutes" value={10} />
          <Option label="15 minutes" value={15} />
        </Select>

        <Select
          id="long_break_time"
          label="Long break time"
          value={15}
          placeholder="asds"
        >
          <Option label="15 minutes" value={15} />
          <Option label="20 minutes" value={20} />
          <Option label="25 minutes" value={25} />
        </Select>

        <Checkbox label="Auto start" />
      </Modal>
    </>
  );
};

export default Pomodoro;
