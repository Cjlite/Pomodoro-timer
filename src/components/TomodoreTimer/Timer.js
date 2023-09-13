import React, { useState, useEffect } from 'react';
import './Timer.css';
import 'font-awesome/css/font-awesome.min.css';


function Timer() {
    const [active, setActive] = useState('focus');
    const [minCount, setMinCount] = useState(24);
    const [count, setCount] = useState(60);
    const [paused, setPaused] = useState(true);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!paused) {
                if (count > 0) {
                    setCount(count - 1);
                } else {
                    if (minCount > 0) {
                        setMinCount(minCount - 1);
                        setCount(60);
                    } else {
                        clearInterval(timer);
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [count, minCount, paused]);

    const startTimer = () => {
        setPaused(false);
        setTimerRunning(true);
    };

    const pauseTimer = () => {
        setPaused(true);
        setTimerRunning(false);
    };

    const resetTimer = () => {
        pauseTimer();
        switch (active) {
            case 'long':
                setMinCount(14);
                break;
            case 'short':
                setMinCount(4);
                break;
            default:
                setMinCount(24);
                break;
        }
        setCount(60);
    };

    const setActiveTimer = (type) => {
        setActive(type);
        pauseTimer();
        switch (type) {
            case 'long':
                setMinCount(14);
                break;
            case 'short':
                setMinCount(4);
                break;
            default:
                setMinCount(24);
                break;
        }
        setCount(60);
    };

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div className="timer-container">
            <div className="section-container">
                <button
                    className={`timer-button ${active === 'focus' ? 'timer-button-focus' : ''}`}
                    onClick={() => setActiveTimer('focus')}
                >
                    Focus
                </button>
                <button
                    className={`timer-button ${active === 'short' ? 'timer-button-focus' : ''}`}
                    onClick={() => setActiveTimer('short')}
                >
                    Short Break
                </button>
                <button
                    className={`timer-button ${active === 'long' ? 'timer-button-focus' : ''}`}
                    onClick={() => setActiveTimer('long')}
                >
                    Long Break
                </button>
            </div>
            <div className="timer-time-container">
                <span id="time" className="timer-time">{`${formatTime(minCount)}:${formatTime(count)}`}</span>
                <div className="timer-button-container">
                    <button
                        id="btn-start"
                        className={`timer-start-pause-button ${paused ? '' : 'timer-hide'}`}
                        onClick={startTimer}
                    >
                        Start
                    </button>
                    <button
                        id="btn-pause"
                        className={`timer-start-pause-button ${!paused ? '' : 'timer-hide'}`}
                        onClick={pauseTimer}
                    >
                        Pause
                    </button>
                    <button
                        id="btn-reset"
                        className="timer-reset-button"
                        onClick={resetTimer}
                    >
                        <i className="fa fa-rotate-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
