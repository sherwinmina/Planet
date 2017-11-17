import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Form, Input, Dropdown, Button, Select } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '', property: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSelect(event) {
    let text = event.target.innerText

    this.setState({ property: text })
  }

  handleSubmit() {
    this.props.searchDoves(this.state)
    this.setState({ term: '', property: '' })
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                value={this.state.term}
                term={this.state.term}
                placeholder="Enter a Value"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field
              value={this.state.property}
              control={Select}
              options={properties}
              placeholder="Property"
              onChange={this.handleSelect}
            />

            <Form.Field control={Button}>Search</Form.Field>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const properties = [
  { key: 'id', value: 'id', text: 'id' },
  { key: 'active', value: 'active', text: 'active' },
  { key: 'color', value: 'color', text: 'color' },
  {
    key: 'images_collected',
    value: 'images_collected',
    text: 'images_collected'
  },
  { key: 'last_command', value: 'last_command', text: 'last_command' },
  { key: 'deorbit_dt', value: 'deorbit_dt', text: 'deorbit_dt' }
]

export default connect(null, actions)(SearchBar)
