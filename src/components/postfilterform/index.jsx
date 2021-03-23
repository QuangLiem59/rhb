import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null
};

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef('');
    function handleSearchChange(v) {
        const value = v.target.value;
        setSearchTerm(value);
        if (typingTimeoutRef.current)
            clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => {
            if (!onSubmit) return;
            const formV = {
                dt: value,
            };
            onSubmit(formV);
        }, 300);

    }
    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </form>
    );
}

export default PostFiltersForm;