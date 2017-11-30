export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

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
