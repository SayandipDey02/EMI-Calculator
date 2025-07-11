import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
 
} from '@mui/material';


function EmiTable({ emiData = [] }) {
  return (
    <Table className="emi-table">
      
      <TableBody>
        {emiData.length > 0 ? (
          emiData.map((emi, index) => (
            <TableRow key={index}>
              <TableCell>{emi.principal}</TableCell>
              <TableCell>{emi.rate}</TableCell>
              <TableCell>{emi.term}</TableCell>
              <TableCell>{emi.emi}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} align="center">
              No EMI data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

EmiTable.propTypes = {
  emiData: PropTypes.arrayOf(
    PropTypes.shape({
      principal: PropTypes.number,
      rate: PropTypes.number,
      term: PropTypes.number,
      emi: PropTypes.number,
    })
  )
};

export default EmiTable;