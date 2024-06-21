import React, { useEffect, useState } from 'react';
import './countdown.styles.scss';


const Countdown = ({ targetDate }) => {
  const [counterValues, setCounterValues] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const formatTimeUnit = (timeUnit) => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCounterValues({
          days: formatTimeUnit(days),
          hours: formatTimeUnit(hours),
          minutes: formatTimeUnit(minutes),
          seconds: formatTimeUnit(seconds)
        });
      } else {
        clearInterval(countdown);
        setCounterValues({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
      }
    };

    const countdown = setInterval(updateCounter, 1000);
    updateCounter(); 

    return () => {
      clearInterval(countdown);
    };
  }, [targetDate]);

  return (
    <div className="launching">
      <div>
        <p id="days">{counterValues.days}</p>
        <span>Days</span>
      </div>
      <div>
        <p id="hours">{counterValues.hours}</p>
        <span>Hours</span>
      </div>
      <div>
        <p id="minutes">{counterValues.minutes}</p>
        <span>Minutes</span>
      </div>
      <div>
        <p id="seconds">{counterValues.seconds}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;