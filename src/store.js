import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginFormReducer from './reducers/loginForm.js'
import actionsReducer from './reducers/actionsReducer.js'
import value from './reducers/value.js'
import countersReducer from './reducers/countersReducer.js'
import actionFormReducer from './reducers/actionForm.js'

const reducer = combineReducers({
  usersReducer,
  currentUser,
  loginFormReducer,
  actionsReducer,
  value,
  countersReducer,
  actionFormReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store
