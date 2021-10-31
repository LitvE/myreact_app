import React from 'react';
import { eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import Week from './Week';
import {format} from 'date-fns';
import PropTypes from 'prop-types';

const getMonth = ({date, currentDate}) => {
    eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    }).map((weekDate) => <Week key={weekDate} weekDate={weekDate} date={date} currentDate={currentDate}/>);
    console.log()
}

function Month (props) {
    const {date} = props;
    return (
        <div>
            <div>{format(date, 'LLLL yy d')}</div>
            <ul>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            {getMonth(props)}
        </div>
    )
}

Month.propTypes = {
    date: PropTypes.instanceOf(Date),
    currentDate: PropTypes.instanceOf(Date)
}

Month.defaultProps = {
    currentDate: new Date(),
}

export default Month;
