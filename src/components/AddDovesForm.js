import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Checkbox, Form } from 'semantic-ui-react'

import * as actions from '../actions'

// Todo: Add form validation

class AddDovesForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      active: false,
      images_collected: '',
      last_command: '',
      deorbit_dt: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value, images_collected: Number(value) })
  }

  handleSubmit() {
    this.props.addDoves(this.state)
    this.props.handleShowForm()
    this.setState({
      id: '',
      active: false,
      images_collected: '',
      last_command: '',
      deorbit_dt: ''
    })
  }

  toggle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div style={!this.props.showForm ? hideStyle : modalStyle}>
        <Form style={{ padding: '20px' }}>
          <Form.Field>
            <label>id</label>
            <input
              name="id"
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox name="active" label="Active" onChange={this.toggle} />
          </Form.Field>

          <Form.Field>
            <label>color</label>
            <input
              name="color"
              type="text"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Images Collected</label>
            <input
              name="images_collected"
              type="number"
              value={this.state.images_collected}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Command</label>
            <input
              name="last_command"
              type="text"
              value={this.state.last_command}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Deorbit Date</label>
            <input
              name="deorbit_dt"
              type="text"
              value={this.state.deorbit_dt}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button type="submit" onClick={this.handleSubmit} color="green">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

let hideStyle = { display: 'none' }

let modalStyle = {
  // display: 'flex',
  width: '400px',
  position: 'absolute',
  zIndex: 2,
  background: 'grey',
  justifyContent: 'center',
  float: 'right'
}

export default connect(null, actions)(AddDovesForm)
