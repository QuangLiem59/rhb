import React from 'react';
import PropTypes from 'prop-types';

Name.propTypes = {
    n: PropTypes.string,
};
Name.defaultProps = {
    n: '',
}

function Name(props) {
    const { n } = props;
    console.log('Name : ', n);
    return (
        <div>
            Name : {n}
        </div>
    );
}

export default React.memo(Name);