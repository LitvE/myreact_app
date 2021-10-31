import React from 'react';
import {format, isSameDay, isSameMonth} from 'date-fns';
import classNames from 'classnames';
import styles from './Day.module.scss';

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

export default Day;
