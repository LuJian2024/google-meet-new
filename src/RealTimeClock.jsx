import React, { useState, useEffect } from "react";

function RealTimeClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="time-container">
            <p>
                {
                    currentTime.toLocaleTimeString(/* [], { hour: '2-digit', minute: '2-digit' } */)
                }
            </p>
            <p>/ wiz-etbj-kck</p>
        </div>
    );
}

export default RealTimeClock;
