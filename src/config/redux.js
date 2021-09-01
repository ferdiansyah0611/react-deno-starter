import { createStore } from 'https://cdn.skypack.dev/redux';

const data = {}

function dispatch(state = data, action){
	switch(action.type){
		default:
			return state
	}
}

const store = createStore(dispatch)

export default store