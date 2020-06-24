import React from 'react';

import Leaderboard from './Leaderboard'

import Typography from '@material-ui/core/Typography'

export default function Dashboard(props) {
  return (
    <div>
      <Typography variant='h1'>Leaderboard</Typography>

      <Leaderboard />

    </div>
  )
}
