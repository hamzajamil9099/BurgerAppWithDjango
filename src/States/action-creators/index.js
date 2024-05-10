export const decreaseTotal = (total) => {
    return (dispatch) => {
       dispatch({
           type: 'decreaseTotal',
           payload: total
       })
    }
}
export const increaseTotal = (total) => {
    return (dispatch) => {
       dispatch({
           type: 'increaseTotal',
           payload: total
       })
    }
}
export const resetTotal = (total) => {
    return (dispatch) => {
       dispatch({
           type: 'resetTotal',
           payload: total
       })
    }
}
export const Login = (token) => {
    return (dispatch) => {
       dispatch({
           type: 'Login',
           payload: token
       })
    }
}

export const updateIngrediants = (Ingrediants) => {
    return {
      type: 'UPDATE_INGREDIANT',
      payload: Ingrediants,
    };
  };