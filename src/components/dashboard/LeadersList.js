import React from 'react';

import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Thing</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Reps</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {props.leaders.map((data, i) => (data && data.reps ? row(data, i) : null))}
      </TableBody>
    </Table>
  )
}
