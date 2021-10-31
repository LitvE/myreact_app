import React from 'react';
import style from '../NewCounter/NewCounter.module.scss';
import PropTypes from 'prop-types';

function Level (props){

    const {score} = props;
    return (
        <div className={style.component2}>
            <p>Component 2</p>
            <p>You are on {score} level!</p>
        </div>
    )
}

Level.propTypes = {
    score: PropTypes.number,
}

Level.defaultProps = {
    score: 0,
}

export default Level;