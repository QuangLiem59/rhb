import React, { useState } from 'react';
import './colorbox.scss';

ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['red', 'green', 'black', 'pink', 'yellow', 'blue'];
    const random_index = Math.trunc(Math.random() * 6);
    return COLOR_LIST[random_index];
}
function ColorBox() {
    const [Color, setColor] = useState(() => {
        const Initcolor = localStorage.getItem('BoxColor') || 'blue';
        console.log(Initcolor);
        return Initcolor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('BoxColor', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: Color }}
            onClick={handleBoxClick}
        >
            CBB
        </div>
    );
}

export default ColorBox;