import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IconButton } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    table: {
      minWidth: 600
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: `10px`,
      height: "100%",
      width: "99%",
      marginTop: theme.spacing(7)
    },
    link: {
      color: "rgba(0,0,0,0.65)",
      textDecoration: "none",
      marginLeft: "10%",
      alignSelf: "flex-start",
      "&:hover": {
        color: "rgba(0,0,0,1)"
      }
    }
  }));

  export default function SimpleTable(){

    const classes = useStyles();

    const [data, updateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);

    let isLoading = true;

    async function sampleFunction(){
        let response = await fetch("/api/employee");
        let body = await response.json();
        updateData(body);
    }

    async function deleteEmployee(id){
        var link = "/api/employee/" + id;
        isLoading = true
        let response = await fetch(link,{
            method: "DELETE"
        })
        isLoading = false
        setLoad(true)
    }

    const deleteRecord = (id) => {
        deleteEmployee(id)
    }

    if(firstLoad){
        sampleFunction();
        setLoad(false);
    }

    if(data.length > 0) isLoading = false;

    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <GroupIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Employee Directory
            </Typography>

            {isLoading ? (
                <CircularProgress/>
            ) : (
                <TableContainer
                    style={{ width: "80%", margin: "0 10px" }}
                    component={Paper}
                >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Dob</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data?.map(row => (
                            <TableRow key={row.id}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.department}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">{row.dob}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => console.log('edit')} color="primary" variant="contained" style={{marginRight: '5px'}}>Edit</Button> 
                                <Button onClick={() => deleteRecord(row.id)} color="secondary" variant="contained">Delete</Button> 
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
            }
            <Link className={classes.link} to="/">
                {" "}
                <Typography align="left">
                &#x2190; Head back to save data
                </Typography>{" "}
            </Link>
        </div>
    )

  }