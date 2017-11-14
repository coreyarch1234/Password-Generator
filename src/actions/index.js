export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

export const generatePassword = (length, name) => {
    return {
        type: GENERATE_PASSWORD,
        payload: {
            length: length,
            name: name
        }
        // payload: length
    }
}
