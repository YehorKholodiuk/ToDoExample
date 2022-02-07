import React from 'react';
import {Grid} from "@mui/material";

const Column = (props) => {
    return (

        <Grid item xs={3}>
        <ul>

            {props.tasks.filter(task => task.status === props.status).map(task => <li key={task.id}>{task.title} </li>)}
        </ul>
            </Grid>
    );
};

export default Column;