import React, {useState, useEffect} from 'react';

import LeadersList from './LeadersList'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import {fetchLeadersAllTime} from '../../actions/leaderboardActions'

export default function Leaderboard(props) {
  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    // debugger
    fetchLeadersAllTime(setLeaders)
  }, [])

  return (
    <Container maxWidth='xs'>
      <LeadersList leaders={leaders} />
    </Container>
  )
}
