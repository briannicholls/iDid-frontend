import React from 'react';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

export default function LeadersList(props) {

  return (
    <Paper>
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Thing</TableCell>
          <TableCell align="right">All-Time</TableCell>
          <TableCell align="left">Reps</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {props.leaders.map((data, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{data.counter}</TableCell>
              <TableCell>{data.allTimeLeader}</TableCell>
              <TableCell>{data.sum}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
    </Paper>
  )
}
