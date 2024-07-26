import {useState, useEffect} from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridium = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12 || 12;
        
        return `${year}-${padZero(month)}-${padZero(date)} ${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridium}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <span>{formatTime()}</span>
    );
}

export default DigitalClock;