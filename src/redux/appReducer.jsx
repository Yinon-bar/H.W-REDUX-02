// action: is an object that has a type and a payload
// 1. type: is a string that describes the action
// 2. payload: is the data that is sent with the action

function appReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const stateCopy = [...state];
      const productToRemove = stateCopy.findIndex(
        (product) => product.id == action.payload
      );
      if (productToRemove == -1) {
        return [state];
      }
      return state.filter((product) => product.id != action.payload);
    default:
      return state;
  }
}

export default appReducer;
