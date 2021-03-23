import React, { useState, useEffect, useRef } from 'react';

function rnewColor(crColor) {
    const COLOR_LIST = ['red', 'blue', 'green', 'black', 'yellow'];
    const crIndex = COLOR_LIST.indexOf(crColor);
    let newIndex = crIndex;
    while (crIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 5);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('');
    const colorRef = useRef('');
    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('Fisrt Color: ', color);
            // console.log('CCCFisrt Color: ', colorRef.current);
            const newColor = rnewColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, [])
    return (
        { color }
    );
}

export default useMagicColor;