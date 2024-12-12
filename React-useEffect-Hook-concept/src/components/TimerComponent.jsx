import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("setInterval executed");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("setInterval stop");
            clearInterval(intervalid);
        }
    }, []);


  return (
    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent