import React from 'react';
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import OverViewTable from "./OverViewTable";
import CustomCarousel from './CustomCarousel';

function createData(name, age, history) {
  return { name, age, history };
}
function CollapsibleTable(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (    
    <React.Fragment>
      <TableRow>
        <TableCell size="medium" component="th" scope="row" onClick={() => setOpen(!open)}>
          <OverViewTable key={row.dt} row={row}></OverViewTable>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0 }} colSpan={6}>
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
                  <tr>
                    <td><CustomCarousel></CustomCarousel></td>
                  </tr>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>


  );
}

export default CollapsibleTable;