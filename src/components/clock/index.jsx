import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};
function Clock() {
    const { timeString } = useClock();
    return (
        <p style={{
            fontSize: "50px"
        }}>
            {timeString}
        </p >
    );
}

export default Clock;