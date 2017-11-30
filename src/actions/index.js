export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';
export const DELETE_PASSWORD = 'DELETE_PASSWORD';

export const generatePassword = (name, range, description, password) => {
    return {
        type: GENERATE_PASSWORD,
        payload: {
            name: name,
            range: range,
            description: description,
            password: password
        }
    }
}

export const deletePassword = (key) => {
    return {
        type: DELETE_PASSWORD,
        payload: key
    }
}
