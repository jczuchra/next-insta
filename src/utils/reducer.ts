export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
};

export const UPDATE_VALUE = 'UPDATE_VALUE';
