import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

import InvestorTable from './investorDetails';
import Header from '../header';
import SubHeader from './subHeader';

import {getPortfolio} from "../../ajaxService";
import {logErr} from "../../logger";

class Investor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };

    this._setCompanies = this._setCompanies.bind(this);
    this._handleError = this._handleError.bind(this);
  }

  componentWillMount() {
    getPortfolio()
      .then(this._setCompanies)
      .then(null, this._handleError);
  }

  _setCompanies(wrapper) {
    const data = wrapper.data;
    this.setState({
      companies: data,
    });
  }

  _handleError(ex) {
    logErr('Exception: ', ex);
  }

  render() {
    return (
      <div>
        <Header displayProfilePhoto={false}/>
        <SubHeader/>
        <Jumbotron>
          <InvestorTable companies={this.state.companies}/>
        </Jumbotron>
      </div>
    );
  }
}

export default Investor;