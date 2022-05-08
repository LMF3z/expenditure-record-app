import { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../store/Store';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
  const { state } = useContext(StoreContext);

  const [intervalId, setIntervalId] = useState(0);
  const [progressBar, setProgressBar] = useState(0.0);

  const speed = 5;

  useEffect(() => {
    setProgressBar(0.0);
  }, []);

  useEffect(() => {
    if (+progressBar >= +state.progressBarEndvalue) {
      cancelInterval();
      return;
    }
  }, [progressBar, state.progressBarEndvalue]);

  useEffect(() => {
    setProgressBar(0.0);

    if (state.progressBarEndvalue > 0) {
      handlerInterval();
    } else {
      setProgressBar(0.0);
    }
  }, [state.progressBarEndvalue]);

  const handlerInterval = () => {
    let progress = setInterval(() => {
      setProgressBar((state) => parseFloat((state + 0.1).toFixed(2)));
    }, speed);

    setIntervalId(progress);
  };

  const cancelInterval = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    return;
  };

  return (
    <div className="w-48 h-48 lg:w-72 lg:h-72">
      <CircularProgressbar
        value={progressBar}
        text={`${progressBar}%`}
        styles={buildStyles({
          textColor: '#111',
          pathColor: '#3276f2',
          // trailColor: 'gold',
        })}
      />
    </div>
  );
};

// #3276f2

export default CircularProgressBar;
