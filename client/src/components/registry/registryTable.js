import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import PieChart from 'react-minimal-pie-chart';
import ExportButton from './exportButton';
import CustomTable from '../customTable';

class RegistryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registries: [],
      companyValuation: '',
      updatedAt: ''
    };
  }

  componentWillReceiveProps(propsReceived) {
    this.setState({
      registries: propsReceived.registries,
      companyValuation: propsReceived.companyValuation,
      updatedAt: propsReceived.updatedAt
    });
  }

  _numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  _returnRows() {
    return this.state.registries.map(registry => {
      return (
        <tr key={registry.id}>
          <td>{registry.name}</td>
          <td>{this._numberWithCommas(registry.number_of_shares)}</td>
          <td>{registry.ownership} %</td>
          <td>{registry.share_number}</td>
        </tr>
      );
    });
  }

  _returnHeadings() {
    return (
      <tr>
        <th>SHAREHOLDER</th>
        <th>SHARES</th>
        <th>OWNERSHIP</th>
        <th>SHARE NUMBER</th>
      </tr>
    );
  }

  _returnPieChart() {
    const data = this.state.registries.map(registry => {
      return {
        value: registry.ownership,
        color: registry.color
      };
    });
    const list = this.state.registries.map(registry => {
      return (
        <li key={registry.id}>
          <div className="square" style={{background: registry.color}}/>
          {registry.name}
        </li>
      );
    });

    return (
      <Table responsive style={{marginTop: '64px'}}>
        <thead>
        <tr>
          <td style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <div style={{marginLeft: '50px', marginTop: '25px', marginBottom: '48px'}}>
              OWNERSHIP<br/>
              <span style={{color: '#cbcbcb'}}>Updated {this.state.updatedAt}</span>
            </div>
            <ul style={{height: '236px', listStyleType: 'none'}}>
              {list}
            </ul>
            <div style={{marginLeft: '50px', marginBottom: '36px'}}>
              Company Valuation<br/>
              <span style={{fontWeight: 'bold'}}>NOK {this.state.companyValuation}</span>
            </div>
          </td>
          <td>
            <PieChart
              className="piechart"
              style={{width: '300px', height: '300px'}}
              radius={40}
              data={data}
              startAngle={180}
              lineWidth={30}
            />
          </td>
          <td align="right" style={{height: '300px', background: '#EEEEEE', width: '30%'}}>
            <ExportButton registries={this.state.registries} companyValuation={this.state.companyValuation}/>
          </td>
        </tr>
        </thead>
      </Table>
    );
  }

  render() {
    return (
      <div>
        <CustomTable header="SHAREHOLDER REGISTER" tableHeadings={this._returnHeadings()}>
          {this._returnRows()}
        </CustomTable>
        {this._returnPieChart()}
      </div>
    )
  }
}

export default RegistryTable;