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

export const saveItem = (item, data) => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(item, data)
    } catch (e) {
        console.log(e);
    }
}
