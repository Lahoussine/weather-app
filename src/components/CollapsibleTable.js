import React,{useEffect, useState,useRef } from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


function createData(name, age, history) {
  return { name, age, history };
}
const rows = [createData("james", 15, [{ date: "2020-01-01" }])];


function CollapsibleTable(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    console.log('Collapsible Table');
    console.log(row);
    console.log("http://openweathermap.org/img/wn/"+row?.weather?.[0]?.icon+"@2x.png");
    return     (
        <React.Fragment>
        <TableRow>
          <TableCell size="medium" component="th" scope="row"   onClick={() => setOpen(!open)}>
               <div className="history-row space-between">
                    <h1>Overview</h1>
                    <div className="column">Temp Min {row?.temp?.min}</div>
                    <div className="column">Temp Max {row?.temp?.max}</div>
                    <div className="column">Description {row?.weather?.[0]?.main}</div>
                    <div className="column">
                        <img src={"http://openweathermap.org/img/wn/"+row?.weather?.[0]?.icon+"@2x.png"} alt="Italian Trulli"></img>
                    </div>
                    <div className="column">Humidity {row?.humidity}</div>
                    <div className="column">Pressure {row?.pressure}</div>                    
              </div>           
           </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Detail
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">In progress...</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                             blabla
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>


    )  ;
}

export default CollapsibleTable;