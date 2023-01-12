const intialState = {
    products: [
      {
        id: '',
        name: "",
        price: '',
        description: "",
      },
    ],
    product: {},
  };
  
  export const productReducer = (state = intialState, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      default:
        return state;
    }
  };