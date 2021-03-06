import React from 'react';
//import {add, sub, format} from 'date-fns';
import Month from './Month';
import PropTypes from 'prop-types';

// class Calendar extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             day: new Date()
//         };
//     }
//     addDays = options => {
//         const {day} = this.state;
//         const changeDay = add(day,options);
//         this.setState({day: changeDay});
//     }
//     subDays = options => {
//         const {day} = this.state;
//         const changeDay = sub(day,options);
//         this.setState({day: changeDay});
//     }
//   render() {
//       const {day} = this.state;
//     return (
//       <div>
//           <div>{format(day, 'EEEE do LLL yy ')}</div>
//           <div>{format(day, 'yyyy LLLL dd')}</div>
//           <button onClick={()=>this.addDays({days:1})}>Add 1 day</button>
//           <button onClick={()=>this.addDays({days:5})}>Add 5 day</button>
//           <button onClick={()=>this.subDays({days:1})}>Sub 1 day</button>
//           <button onClick={()=>this.addDays({weeks:1})}>Add 1 week</button>
//           <button onClick={()=>this.addDays({years:1})}>Add 1 year</button>
//       </div>
//     );
//   }
// }


const Calendar = ({currentDate}) => {
    return (
        <div>
            <Month date={currentDate} currentDate={currentDate}/>
        </div>
    )
}

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date)
}

Calendar.defaultProps ={
    currentDate: new Date(),
}

export default Calendar;