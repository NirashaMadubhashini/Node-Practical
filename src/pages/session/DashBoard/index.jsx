import {Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import React, {Component, Fragment} from 'react';
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";


class DashBoard extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <div>
                    <Link to="/"
                          style={{position: 'absolute', left: 1100, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Home' wrapped={false}/></Link>
                    <Link to="customer"
                          style={{position: 'absolute', left: 1200, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Customer' wrapped={false}/></Link>
                    <Link to="item"
                          style={{position: 'absolute', left: 1330, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Item' wrapped={false}/></Link>
                </div>
                <div className={classes.title}>
                    <Typography variant="h1">DashBoard</Typography>
                </div>

                <Card sx={{ minWidth: 275,top:300,position: 'absolute',left:350}}>
                    <CardContent>
                        <Typography variant="h4" component="div">
                           Customer
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">show</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275,top:300,position: 'absolute',left:800 }}>
                    <CardContent>
                        <Typography variant="h4" component="div">
                           Item
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Show</Button>
                    </CardActions>
                </Card>








            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(DashBoard)
