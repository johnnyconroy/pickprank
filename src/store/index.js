import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'
import sampleData from './initialState'

const logger = store => next => action => {
	let result
	console.group('dispatching action => ', action.type)
	console.log('prev states', store.getState())
	console.log('action', action)
	result = next(action)
	console.log('next state', store.getState())
	console.groupEnd()
	return result
}

const saver = store => next => action => {
	let result = next(action)
	localStorage['redux-store'] = JSON.stringify(store.getState())
	return result
}

export default (initialState = sampleData) => {
	return applyMiddleware(logger, saver)(createStore)(
		appReducer,
		(localStorage["redux-store"]) ?
		    JSON.parse(localStorage["redux-store"]) :
		    sampleData
	)
}
