import React from 'react';
import {Table} from 'react-bootstrap';

const CustomTable = ({children, header, tableHeadings}) => {
  return(
    <Table responsive>
      <thead>
      <tr>
        <th colSpan="5" style={{background: '#8295AC', color: '#ffffff'}}>{header}</th>
      </tr>
      {tableHeadings}
      </thead>
      <tbody>
      {children}
      </tbody>
    </Table>
  );
};

export default CustomTable;