
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from './styles'
import {withRouter} from "react-router-dom";




const Detailpage = (props) => {
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <div className={classes.pic}>
                                <img src={props.item.image_url} alt="img" />
                            </div>
                            <Typography variant="h4" className={classes.title}>
                                {props.name}
                            </Typography>
                            <Typography variant="body1" className={classes.text}>
                                {props.description}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </Box>
    );
};
export default withRouter(Detailpage);