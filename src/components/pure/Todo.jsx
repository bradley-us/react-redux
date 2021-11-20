import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, id}) => {

    const stylesForClicked = {
        textDecoration: completed ? 'line-through' : 'none',
        textDecorationColor: completed ? 'green' : 'none',
        color: completed ? 'green' : 'white'
    }

    return (
        <li onClick={onClick} style={stylesForClicked}>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
