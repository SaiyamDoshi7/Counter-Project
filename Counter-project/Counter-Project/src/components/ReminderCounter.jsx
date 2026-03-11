import { useEffect, useState } from "react";

const ReminderCounter = () => {
  const initialTime = "00:01:00";

  const timeToSeconds = (time) => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const [seconds, setSeconds] = useState(timeToSeconds(initialTime));
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0 && isRunning) {
      setIsRunning(false);
      setMessage("Reminder: Time is up!");
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Reminder Countdown Timer</h1>

        <div className="time">{formatTime(seconds)}</div>

        {message && <p className="message">{message}</p>}

        <div className="btn-group">
          <button className="btn start" onClick={() => setIsRunning(true)}>
            Start
          </button>

          <button className="btn pause" onClick={() => setIsRunning(false)}>
            Pause
          </button>

          <button
            className="btn reset"
            onClick={() => {
              setIsRunning(false);
              setSeconds(timeToSeconds(initialTime));
              setMessage("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReminderCounter;