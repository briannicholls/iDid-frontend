import React, {useState, useEffect} from 'react';
import {fetchAllLeaders, fetchWeekLeaders, fetchMonthLeaders} from '../../actions/leaderboardActions'
import LeadersList from './LeadersList'
import Typography from '@material-ui/core/Typography'

export default function Leaderboard(props) {
  const [allTimeLeaders, setAllTimeLeaders] = useState([])
  const [monthLeaders, setMonthLeaders] = useState([])
  const [weekLeaders, setWeekLeaders] = useState([])

  useEffect(() => {
    fetchAllLeaders(setAllTimeLeaders)
    fetchWeekLeaders(setWeekLeaders)
    fetchMonthLeaders(setMonthLeaders)
  }, [])

  return (
    <>
      <Typography variant="h2" style={{textAlign: 'center'}}>This Week</Typography>
      <LeadersList leaders={weekLeaders} />
      <br />
      <Typography variant="h2" style={{textAlign: 'center'}}>This Month</Typography>
      <LeadersList leaders={monthLeaders} />
      <br />
      <Typography variant="h2" style={{textAlign: 'center'}}>All-Time</Typography>
      <LeadersList leaders={allTimeLeaders} />
    </>
  )
}
