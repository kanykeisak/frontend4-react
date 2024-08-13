import React from 'react';

const List = ({list}) => {
    return (
        <ul>
            {
                list.map(task => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))
            }
        </ul>
    );
};

export default List;