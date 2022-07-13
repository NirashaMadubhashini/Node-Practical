import {Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import GDSEButton from "../../../components/common/Button"
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PostService from "../../../services/PostService";
import GDSESnackBar from "../../../components/common/SnackBar";
import GDSEDataTable from "../../../components/common/Table";

class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                CustomerId: '',
                CustomerName: '',
                Address: '',
                Contact: ''
            },
            alert: false,
            message: '',
            severity: '',

            //for table
            //this data array is used to input data to the table as sample data
            /* data: [
                 { id: 1, userId: 'Snow', title: 'Jon', body: 35 },
                 { id: 2, userId: 'Lannister', title: 'Cersei', body: 42 },
                 { id: 3, userId: 'Lannister', title: 'Jaime', body: 45 },
                 { id: 4, userId: 'Stark', title: 'Arya', body: 16 },
                 { id: 5, userId: 'Targaryen', title: 'Daenerys', body: null },
                 { id: 6, userId: 'Melisandre', title: null, body: 150 },
                 { id: 7, userId: 'Clifford', title: 'Ferrara', body: 44 },
                 { id: 8, userId: 'Frances', title: 'Rossini', body: 36 },
                 { id: 9, userId: 'Roxie', title: 'Harvey', body: 65 },
             ],*/
            data: [],
            loaded: false,

            //for data table
            columns: [
                {
                    field: 'id',
                    headerName: 'Customer Id',
                    width: 150
                },
                {
                    field: 'userId',
                    headerName: 'Customer Name',
                    width: 300
                },
                {
                    field: 'title',
                    headerName: 'Address',
                    width: 250,
                    sortable: false
                },
                {
                    field: 'body',
                    headerName: 'Contact',
                    width: 100
                },
            ]
        }
    }

    async loadData() {
        let res = await PostService.fetchPosts();
        if (res.status === 200) {
            this.setState({
                loaded: true,
                data: res.data
            })
            console.log("res: " + JSON.stringify(res.data))

        } else {
            console.log("fetching error: " + res)
        }
    }

    componentDidMount() {
        console.log('Post Screen Mounted!');
        this.loadData();
    }

    // componentWillUnmount() {
    //     console.log("Post Scren Unmounted!!")
    // }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div>
                    <Link to="/"
                          style={{position: 'absolute', left: 1100, textDecoration: "none", color: 'black',top:20}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Home' wrapped={false}/></Link>
                    <Link to="customer"
                          style={{position: 'absolute', left: 1200, textDecoration: "none", color: 'black',top:20}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Customer' wrapped={false}/></Link>
                    <Link to="item"
                          style={{position: 'absolute', left: 1330, textDecoration: "none", color: 'black',top:20}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Item' wrapped={false}/></Link>
                </div>

                <div className={classes.title__container}>
                    <Typography variant="h4">
                       Customer Manager
                    </Typography>
                </div>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={0.5} style={{ marginTop: 100 }}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">Customer Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="User Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Customer Name</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                validators={['required']}
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({ formData })
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">Address</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Title"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Contact</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Body"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.body}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.body = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex', position: "absolute"}}
                              justifyContent="flex-end">
                            <GDSEButton size="medium" variant="contained" label="Save" type="submit" style={{left: 880, top: 160}}/>
                            <GDSEButton size="medium" variant="contained" label="Update" color="success" style={{left:890, top: 160}}/>
                            <GDSEButton size="medium" variant="contained" label="Cancel" color="error" style={{left: 900, top: 160}}/>

                        </Grid>
                    </Grid>

                </ValidatorForm>
                {/* created loaded variable in the state. inside the loadData method if only data loaded from the API,
                                set loaded variable true. below table is render only loaded == true */}
                {this.state.loaded &&
                <Grid container style={{ height: 400, width: '100%', marginTop: 90 }}>
                    {/* <BasicPostTable data={this.state.data} /> */}
                    <GDSEDataTable
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={5}
                        pageSize={5}
                        // checkboxSelection={true}
                    />
                </Grid>
                }
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(Customer)