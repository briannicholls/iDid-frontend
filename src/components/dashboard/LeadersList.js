import React from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

const LeadersList = ({ leaders }) => {
  const Row = ({ leader, i }) => {
    return (
      <TableRow key={i}>
        <TableCell>{leader.counter_name}</TableCell>
        <TableCell>{leader.name}</TableCell>
        <TableCell>{leader.reps}</TableCell>
      </TableRow>
    )
  }

  return (
    <Table size='small' >
      <TableHead>
        <TableRow>
          <TableCell >Thing</TableCell>
          <TableCell >Name</TableCell>
          <TableCell >Reps</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { leaders.map((leader, i) => (leader && leader.reps ? <Row {...({ leader, i })} /> : null)) }
      </TableBody>
    </Table>
  )
}

export default LeadersList