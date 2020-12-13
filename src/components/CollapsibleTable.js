import React from 'react';
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import DetailTable from "./DetailTable";

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
              <DetailTable key={row.dt} row={row}></DetailTable>          
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