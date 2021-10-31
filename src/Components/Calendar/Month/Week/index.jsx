import { startOfWeek, eachDayOfInterval, endOfWeek  } from 'date-fns'
import React from 'react'
import Day from './Day';
import PropTypes from 'prop-types';

const getWeek = ({date, weekDate, currentDate}) => {
    eachDayOfInterval({
        start: startOfWeek(weekDate),
        end: endOfWeek(weekDate),
    }).map((dayDate) => <Day key={dayDate} dyDate={dayDate} date={date} currentDate={currentDate}/>);
}

function Week(props) {

    return (
        <ul>{getWeek(props)}</ul>
    )
}

Week.propTypes = {
    date: PropTypes.instanceOf(Date),
    weekDate: PropTypes.instanceOf(Date),
    currentDate: PropTypes.instanceOf(Date)
}

Week.defaultProps = {
    currentDate: new Date(),
}

export default Week;
