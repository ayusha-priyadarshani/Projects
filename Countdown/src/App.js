// src/App.js
import React, { useState, useEffect } from "react";
import { formatDistanceToNow, differenceInMilliseconds } from "date-fns";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Update the countdown timer
  useEffect(() => {
    if (!selectedDate) return;

    const endDate = new Date(selectedDate);
    const startDate = new Date();

    setStartDate(startDate);
    setEndDate(endDate);

    const updateCountdown = () => {
      const now = new Date();
      const remaining = formatDistanceToNow(endDate, { includeSeconds: true });
      setRemainingTime(remaining);

      const totalDuration = differenceInMilliseconds(endDate, startDate);
      const elapsed = differenceInMilliseconds(now, startDate);
      const progressPercentage = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(progressPercentage);

      if (now >= endDate) clearInterval(intervalId);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [selectedDate]);

  // Handle date input changes
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <section className="Whole">
      <section className="App">
        <h1>Countdown App</h1>
        <h4>{`${(new Date())}`}</h4>
      </section>
      <section className="Calendar">
        <h4>{`Select a future date`}</h4>
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </section>
      <section className="countdown-info">
        <p>{ progress ==100? `YAY` : progress > 75? `Almost there!!` : progress > 50? `More than halfway through!` : progress >10? `Good things come to those who wait!` : "  "}</p>
        <p>{ progress == 100? `Time's UPPP` : progress > 0? `Time remaining: ${remainingTime}`:
        "Pick a date and time"}</p>
        <section className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </section>
        <p>{progress > 0 ? `Progress: ${Math.floor(progress)}%` : ""}</p>
      </section>
      
    </section>
  );
}

export default App;
