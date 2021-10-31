import { startOfWeek, eachDayOfInterval, endOfWeek  } from 'date-fns'
import React from 'react'
import Day from './Day';

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

export default Week;
