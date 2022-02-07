import React from 'react';
import {Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
const Column = (props) => {
    return (

        <Grid item xs={3}>
            <Paper>
                <ul>

                    {props.tasks.filter(task => task.status === props.status).map(task => <li key={task.id}>{task.title} </li>)}
                </ul>
            </Paper>

            </Grid>
    );
};

export default Column;