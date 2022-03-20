import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import BottomNav from './BottomNav'
import {getCurrentState} from '../actions/value.js'
import {fetchUserActions} from '../actions/actions.js'
import {changeAppState} from '../actions/value.js'

function NavContainer({ currentUser, changeAppState, fetchUserActions, history} ) {
  const handleChangeState = val => {
    if (val === 2) { 
      fetchUserActions(currentUser.id)
      history.push( `${valueMap[val]}/${currentUser.id}` )
    } else {
      history.push( valueMap[val] )
    }
    changeAppState(val) // server POST request
  }

  return  <BottomNav
            changeAppState={handleChangeState}
            position='static' 
          />
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const valueMap = [
  '/',
  '/routines',
  '/actions'
]

const mapDispatchToProps = dispatch => {
  return {
    changeAppState: (val) => dispatch(changeAppState(val)),
    getCurrentState: () => dispatch(getCurrentState()),
    fetchUserActions: (userId) => dispatch(fetchUserActions(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))
