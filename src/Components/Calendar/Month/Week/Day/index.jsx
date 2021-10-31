import React from 'react';
import {format, isSameDay, isSameMonth} from 'date-fns';
import classNames from 'classnames';
import styles from './Day.module.scss';
import PropTypes from 'prop-types';

const Day = (props) => {

        const {date, dayDate, currentDate} = props;

        const isCurrentDay = isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);

        const dayStyle = classNames(styles.day, {[styles.currentDate]: isCurrentDay, [styles.otherMonth]:!isSameMonth(dayDate, date)});
        return (
            <li classNames={dayStyle}>
                {format(dayDate, 'd')};
            </li>
        )
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    dayDate: PropTypes.instanceOf(Date),
    currentDate: PropTypes.instanceOf(Date),
}

Day.defaultProps = {
    currentDate: new Date(),
}

export default Day;
