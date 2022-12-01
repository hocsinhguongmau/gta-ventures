import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { COUNTDOWN_DATE } from '../../constants/index';

export default function Countdown() {
  return (
    <div className="clock">
      <FlipCountdown
        size="small"
        hideYear
        hideMonth
        titlePosition="bottom"
        yearTitle="Year"
        monthTitle="Months"
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAtZero
        endAt={COUNTDOWN_DATE} // Date/Time
      />
    </div>
  );
}
