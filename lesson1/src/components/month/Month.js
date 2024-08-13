import React from 'react';
import Day from "../day/Day";
import Time from "../time/Time";

const Month = ({date}) => {
    return (
        <div>
            <p>Завтра будет {date}</p>
            <Day day={'четверг'}/>
            <Time time={'17:24'}/>
        </div>
    );
};

export default Month;