import React from 'react';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function LeadersList(props) {

  const row = (data, i) => {
    return (
    <TableRow key={i}>
      <TableCell>{data.counter_name}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.reps}</TableCell>
    </TableRow>)
  }

  return (
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Thing</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Reps</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {props.leaders.map((data, i) => (data ? row(data, i) : null))}
      </TableBody>
    </Table>
  )
}
