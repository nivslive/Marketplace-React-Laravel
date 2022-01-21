import { actionTypes } from '../actions/loading.action';
import loadingReducer from './loading.reducer';
const initialState = {
open: true,
msg: 'Carregando...'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}
