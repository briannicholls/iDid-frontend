import React from 'react';
// import {connect} from 'react-redux'

import Action from './action.js'

// Material UI
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

export const ActionsList = (props) => {

  const renderActions = () => {
    if (props.actions.server_message) {
      return <p>{props.actions.server_message}</p>
    } else {
      return props.actions.reverse().map(action => {
        return <Action action={action} key={action.id} kind={action.counter.kind} unit={action.counter.unit} ></Action>
        // return <ListItem component={Action} key={action.id} action={action}></ListItem>
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

// const mapStateToProps = state => {
//   return {
//     actions: state.actionsReducer
//   }
// }

export default ActionsList
