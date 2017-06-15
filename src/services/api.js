import {localConfig} from '../config/local'

export const getUsers = () => {
    return fetch(localConfig.API_URL + '/users')
        .then((resp) => resp.json())
}
