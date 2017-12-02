import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Header from '../header';
import SubHeader from './subHeader';
import RegistryTable from './registryTable';
import Sidebar from './sidebar';

import {getCompany, getRegistry} from "../../ajaxService";
import {logErr} from "../../logger";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      registries: [],
      companyValuation: '',
      updatedAt: '',
      color: this.props.location.color
    };

    this._handleError = this._handleError.bind(this);
    this._setRegistries = this._setRegistries.bind(this);
    this._setCompanyData = this._setCompanyData.bind(this);
  }

  componentWillMount() {
    let company_id;
    if (this.props.location.company_id === undefined) {
      company_id = localStorage.getItem('company_id');
      this.setState({color: localStorage.getItem('color')});
    } else {
      company_id = this.props.location.company_id;
      localStorage.setItem('company_id', JSON.stringify(company_id));
      localStorage.setItem('color', this.props.location.color);
    }

    this._fetchData(company_id);
  }

  _fetchData(company_id) {
    getRegistry(company_id)
      .then(this._setRegistries)
      .then(null, this._handleError);

    getCompany(company_id)
      .then(this._setCompanyData)
      .then(null, this._handleError);
  }

  _setRegistries(wrapper) {
    const data = wrapper.data;
    this.setState({
      registries: data,
    });
  }

  _setCompanyData(wrapper) {
    const data = wrapper.data;
    this.setState({
      companyName: data.name,
      companyValuation: data.valuation,
      updatedAt: data.created_at
    });
  }

  _handleError(ex) {
    logErr('Exception: ', ex);
  }

  render() {
    return (
      <div>
        <Header displayProfilePhoto={true}/>
        <Sidebar color={this.state.color} companyName={this.state.companyName}/>
        <SubHeader/>
        <Jumbotron style={{marginLeft: '228px', marginBottom: '-30px'}}>
          <RegistryTable
            registries={this.state.registries}
            companyValuation={this.state.companyValuation}
            updatedAt={this.state.updatedAt}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default Register;