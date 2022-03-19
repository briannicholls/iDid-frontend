import {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchUser} from '../../actions'
import _ from 'lodash'

const UserShow = ({ user, match, fetchUser }) => {
  useEffect(() => {
    fetchUser(match.params.id)
  }, [])

  if (!user || _.isEmpty(user)) {
    return <p>Loading...</p>
  }
  
  return (
    <Typography variant="h1" color="initial">
      {user.name}
    </Typography>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user[ownProps.match.params.id]
  }
}

export default withRouter(connect(mapStateToProps, { fetchUser })(UserShow))