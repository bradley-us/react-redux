import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({filterActive, onClick, children}) => {

    if(filterActive){
        return (<button style={{background: 'pink', border: 'none', padding: '2.3px'}}>{children}</button>)
    } return (
        <button
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        >
            {children}
        </button>
    )
}

Filter.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}


export default Filter;
