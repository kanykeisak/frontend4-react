import React from 'react';
import Day from "../day/Day";

const Month = ({date}) => {
    return (
        <div>
            <p>Завтра будет {date}</p>
            <Day day={'четверг'}/>
        </div>
    );
};

export default Month;