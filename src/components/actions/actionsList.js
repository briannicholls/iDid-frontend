import React from 'react';
import {connect} from 'react-redux'
import Action from './action.js'

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


        {renderActions()}


    </>
  )
}

const mapStateToProps = state => {
  return {
    actions: state.actionsReducer
  }
}

export default connect(mapStateToProps)(ActionsList)
