const items = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  };
const IngrediantReducer = (state = items, action) => {
	switch(action.type){
	case 'UPDATE_INGREDIANT':
		return state = action.payload;
	default:
		return state;
	}
}
export default IngrediantReducer;