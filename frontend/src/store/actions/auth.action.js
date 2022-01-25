import { Http } from '../../config/Http'
import { changeLoading } from './loading.action'

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS'
}


export const change = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const success = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})


export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);
    dispatch(change({
        email: '',
        password: ''
    }))

    dispatch(success(true))
}


export const login = credentials => dispatch => {
        dispatch(changeLoading({
            open: true,
            msg: 'Autenticando usuário.'
        }))

        return Http.post('')
}
