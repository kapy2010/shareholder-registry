import React from 'react';
import PropTypes from 'prop-types';

const cell = ';';
const row = '\n';

function ExportButton(props) {
  let data = props.registries.reduce((acc, o) => {
    return acc + o.id + cell + o.name + cell + o.number_of_shares + cell + o.ownership + cell + o.share_number + row;
  }, 'ID' + cell + 'Name' + cell + 'SHARES' + cell + 'OWNERSHIP' + cell + 'SHARE NUMBER'+ row);
  data += 'COMPANY VALUATION' + cell + cell + cell + cell + props.companyValuation + row;
  const encodedData = encodeURI(data);
  return (
    <a className="btn" style={{textDecoration: 'none'}} href={`data:application/csv;charset=utf-8,${encodedData}`} download="registries.csv">
      EXPORT
    </a>
  );
}

ExportButton.propTypes = {
  registries: PropTypes.array.isRequired
};

export default ExportButton;