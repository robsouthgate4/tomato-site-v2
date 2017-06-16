/**
 * loadstate from localstorage and parse it
 * @return data obj or undefined
 */

export const getItem = (item) => {
    try {
        const serializedState = localStorage.getItem(item)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}

/**
 * Save to state to local store
 * @param state object from redux store
 */

export const saveItem = (id, token) => {
    try {
        const serializedState = JSON.stringify(token);
        localStorage.setItem(id, token)
    } catch (e) {
        console.log(e);
    }
}
