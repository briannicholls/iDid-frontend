import {useEffect} from 'react';
import Action from './action.js'

// Material UI
import List from '@material-ui/core/List';
import { fetchUserActions } from '../../actions/actions.js';

export const ActionsList = (props) => {

  useEffect(() => {
    props.fetchUserActions(props.currentUser.id)
  }, [])

  const renderActions = () => {
    if (props.actions.server_message) {
      return <p>{props.actions.server_message}</p>
    } else {
      return props.actions.reverse().map(action => {
        return <Action action={action} key={action.id} kind={action.counter.kind} unit={action.counter.unit} ></Action>
      })
    }
  }

  return (
    <>
    <List component="ul">
      {renderActions()}
    </List>
    </>
  )
}

const mapStateToProps = state => {
  return {
    actions: state.actions,
    currentUser: state.currentUser
  }
}

export default ActionsList
