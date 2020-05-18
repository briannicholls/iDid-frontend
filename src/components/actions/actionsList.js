import React from 'react';
import {connect} from 'react-redux'

import Action from './action.js'

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const ActionsList = (props) => {

  const renderActions = () => {

    return props.actions.map(action => {
      return <ListItem component={Action} key={action.id} action={action}></ListItem>
    })
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
    actions: state.actionsReducer
  }
}

export default connect(mapStateToProps)(ActionsList)
