import React, {useState, useEffect} from 'react';

import LeadersList from './LeadersList'

// import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import {fetchLeadersAllTime} from '../../actions/leaderboardActions'

export default function Leaderboard(props) {
  const [allTimeLeaders, setAllTimeLeaders] = useState([])
  const [monthLeaders, setMonthLeaders] = useState([])
  const [weekLeaders, setWeekLeaders] = useState([])

  useEffect(() => {
    fetchLeadersAllTime(setAllTimeLeaders)
  }, [])

  return (
    <Paper square variant='outlined'>
      <Typography variant='h2'>All-Time</Typography>
      <LeadersList leaders={allTimeLeaders} />

      <Typography variant='h2'>This Month</Typography>
      <LeadersList leaders={monthLeaders} />

      <Typography variant='h2'>This Week</Typography>
      <LeadersList leaders={weekLeaders} />
    </Paper>
  )
}
