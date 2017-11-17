import React from 'react'
import { Header, Table, Loader, Button } from 'semantic-ui-react'

let DovesTable = props => {
  let renderTable = (
    <Table celled padded>
      <Table.Header>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>active</Table.HeaderCell>
        <Table.HeaderCell>color</Table.HeaderCell>
        <Table.HeaderCell>images_collected</Table.HeaderCell>
        <Table.HeaderCell>last_command</Table.HeaderCell>
        <Table.HeaderCell>deorbit_dt</Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {props.doves.length === 0
          ? 'Could Not Find Results for your Search'
          : props.doves.map(item => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <div
                    style={{
                      margin: '10px'
                    }}
                  >
                    {' '}
                    {item.id}
                  </div>
                  <Button id={item.id} size="mini" onClick={props.deleteDoves}>
                    Delete
                  </Button>
                </Table.Cell>
                <Table.Cell>{item.active.toString()}</Table.Cell>
                <Table.Cell>{item.color}</Table.Cell>
                <Table.Cell>{item.images_collected}</Table.Cell>
                <Table.Cell>{item.last_command}</Table.Cell>
                <Table.Cell>{item.deorbit_dt}</Table.Cell>
              </Table.Row>
            ))}
      </Table.Body>
    </Table>
  )

  return (
    <div>
      {!props.doves ? <Loader active inline="centered" /> : renderTable}
    </div>
  )
}

export default DovesTable
