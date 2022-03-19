import {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchUser} from '../../actions'

const UserShow = ({ user, match, fetchUser }) => {
  useEffect(() => {
    fetchUser(match.params.id)
  }, [])

  
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