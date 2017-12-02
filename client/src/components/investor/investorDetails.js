import React, {Component} from 'react';
import PieChart from 'react-minimal-pie-chart';
import {withRouter} from 'react-router-dom';
import CustomTable from '../customTable';

class InvestorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentWillReceiveProps(propsReceived) {
    this.setState({
      companies: propsReceived.companies
    });
  }

  _numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  _handleClick(company) {
    this.props.history.push({
      pathname: '/register',
      company_id: company.id,
      color: company.color
    });
  }

  _returnHeadings() {
    return (
      <tr>
        <th>COMPANY</th>
        <th>SHARES</th>
        <th>DILUTED</th>
        <th>INVESTED</th>
        <th>VALUE</th>
      </tr>
    );
  }

  _returnRows() {
    return this.state.companies.map(company => {
      return (
        <tr key={company.id} onClick={this._handleClick.bind(this, company)}>
          <td>
            <div className="square" style={{background: company.color}}/>
            {company.name}
          </td>
          <td>{company.number_of_shares}</td>
          <td>{company.diluted} %</td>
          <td>{company.original_investments}</td>
          <td>
            {company.value_of_investments}
            <div className="percentage_increase">
              +{this._numberWithCommas(company.roi)}%
            </div>
          </td>
        </tr>
      );
    });
  }

  _returnPieChart() {
    const data = this.state.companies.map(company => {
      return {
        value: company.diluted,
        color: company.color
      };
    });
    return (
      <div>
        <PieChart
          className="piechart"
          style={{marginTop: '-20px'}}
          radius={30}
          data={data}
          startAngle={180}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="investor_table">
        <CustomTable header="COMPANIES" tableHeadings={this._returnHeadings()}>
          {this._returnRows()}
        </CustomTable>
        {this._returnPieChart()}
      </div>
    )
  }
}

const InvestorDetailsWithRouter = withRouter(InvestorDetails);
export default InvestorDetailsWithRouter;
