import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { string } from 'yup';
import { FormatBold } from '@mui/icons-material';
// import Button from '@mui/material/Button';
import confiData from "../../config.json"

function DataListComponent() {
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
  };

  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const res = await axios.get(confiData.DATA_API);
    setData(res.data);
    console.log(res.data);
    };

  useEffect(() => { fetchdata(); }, []);
  

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650, border: 4 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><strong> Agreement No.</strong></TableCell>
          <TableCell align="right"><strong>Contract Category</strong></TableCell>
          <TableCell align="right"><strong>Contract Date</strong></TableCell>
          <TableCell align="right"><strong>Contract Expiry</strong></TableCell>
          <TableCell align="right"><strong>Contract Status</strong></TableCell>
          <TableCell align="right"><strong>Vendor Name</strong></TableCell>
          <TableCell align="right"><strong>Vendor No.</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((data) => (
          <TableRow
            key={data.agreement_number}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.agreement_number}
            </TableCell>
            <TableCell align="right">{data.contract_category}</TableCell>
            <TableCell align="right">{data.contract_date}</TableCell>
            <TableCell align="right">{data.contract_expiry}</TableCell>
            <TableCell align="right">{data.contract_status}</TableCell>
            <TableCell align="right">{data.vendor_name}</TableCell>
            <TableCell align="right">{data.vendor_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
  }

export default DataListComponent;
