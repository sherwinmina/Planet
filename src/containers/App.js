import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from '../components/Table'
import SearchBar from '../components/SearchBar'
import AddDovesForm from '../components/AddDovesForm'

import * as actions from '../actions'

import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Button } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showForm: false }
    this.handleshowForm = this.handleshowForm.bind(this)
    this.handleDeleteDoves = this.handleDeleteDoves.bind(this)
  }

  componentDidMount() {
    this.props.fetchDoves()
  }

  handleshowForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  handleDeleteDoves(event) {
    let id = event.target.id
    this.props.removeDoves(event.target.id)
  }

  render() {
    return (
      <div className="app-container">
        <div className="header-container">
          <SearchBar className="search-bar" />
          <Button primary className="add-doves" onClick={this.handleshowForm}>
            {!this.state.showForm ? 'Add Form' : 'Close'}
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AddDovesForm
            showForm={this.state.showForm}
            handleShowForm={this.handleshowForm}
          />
        </div>
        {this.props.doves ? (
          <Table {...this.props} deleteDoves={this.handleDeleteDoves} />
        ) : null}
      </div>
    )
  }
}

function mapStateToProps({ All }) {
  return { doves: All.doves }
}

export default connect(mapStateToProps, actions)(App)
