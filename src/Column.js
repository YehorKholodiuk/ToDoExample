import React from 'react';

const Column = (props) => {
    return (
        <div>
            {props.tasks.filter(task => task.status === props.status).map(task => <li key={task.id}>{task.title} </li>)}
        </div>
    );
};

export default Column;