import React from 'react';
import classes from './List.module.css'
const List = ({list}) => {
    return (
        <ul className={classes.list}>
            {
                list.map(task => (
                    <li key={task.id} className={classes.list}>
                        {task.title}
                    </li>
                ))
            }
        </ul>
    );
};

export default List;