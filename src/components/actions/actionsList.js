import {useEffect, useState} from 'react';
import Action from './action.js'
import {connect} from 'react-redux'
// Material UI
import List from '@material-ui/core/List';
import { fetchUserActions } from '../../actions/actions.js';

export const ActionsList = (props) => {

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    props.fetchUserActions(props.currentUser.id)
    .then(() => setLoading(false))
  }, [])

  const renderActions = () => {
    if (props.myActions && props.myActions.server_message) {
      return <p>{props.myActions.server_message}</p>
    } else {
      return props.myActions.reverse().map(action => {
        return <Action 
          action={action}
          key={action.id}
          kind={action.counter.kind}
          unit={action.counter.unit} 
        />
      }
      )
    }
  }

  if (loading) {
    return null
  }

  return (
    <List component="ul">
      { props.myActions ? renderActions() : null }
    </List>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    myActions: state.actions[ownProps.match.params.user_id ],
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchUserActions })(ActionsList)
