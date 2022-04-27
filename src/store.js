import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginFormReducer from './reducers/loginForm.js'
import actions from './reducers/actionsReducer.js'
import value from './reducers/value.js'
import counters from './reducers/countersReducer.js'
import counterFormReducer from './reducers/counterForm.js'
import userReducer from './reducers/userReducer.js'
import errorsReducer from './reducers/errorsReducer.js'


const reducer = combineReducers({
  actions,
  counters,
  counterFormReducer,
  currentUser,
  loginFormReducer,
  user: userReducer,
  value,
  errors: errorsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store
