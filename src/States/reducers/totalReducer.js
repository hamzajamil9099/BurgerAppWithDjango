const totalReducer = (state = 3, action) => {
	switch(action.type){
	case 'decreaseTotal':
		return state - action.payload;
	case 'increaseTotal':
		return state + action.payload;
    case 'resetTotal':
		return state = 3;
	default:
		return state;
	}
}
export default totalReducer;