
export const actionTypes =  {
    CHANGE: 'CHANGE_USER'
}

export const changeUser = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});
