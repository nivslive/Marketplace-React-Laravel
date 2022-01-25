const initialState = {
    adm: false,
    logged: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case first:
      return { ...state, ...payload };

    default:
      return state;
  }
};
