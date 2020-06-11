import React, {useState, useEffect} from 'react';

import LeadersList from './LeadersList'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import {fetchLeadersAllTime} from '../../actions/leaderboardActions'

export default function Leaderboard(props) {
  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    // debugger
    fetchLeadersAllTime(setLeaders)
  }, [])

  return (
    <Paper square variant='outlined'>
      <Typography variant='h2'>Leaders</Typography>

      <LeadersList leaders={leaders} />
    </Paper>
  )
}
