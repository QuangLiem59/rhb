import React from 'react';
import useClock from '../../hooks/useClock';
import './clock2.scss';

Clock2.propTypes = {

};

function Clock2(props) {
    const { timeString } = useClock();
    return (
        <div className="clock2">
            <p className="clock2t"> {timeString}</p>
        </div>
    );
}

export default Clock2;