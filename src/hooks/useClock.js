import { useState, useEffect } from 'react';

function formatDate(a) {
    const hours = `0${a.getHours()}`.slice(-2);
    const minutes = `0${a.getMinutes()}`.slice(-2);
    const seconds = `0${a.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds} `;
}
function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockI = setInterval(() => {
            const time = new Date;
            const newTimeString = formatDate(time);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            clearInterval(clockI);
        }
    }, []);
    return (
        { timeString }
    );
}

export default useClock;