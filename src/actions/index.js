export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

export const generatePassword = (name, range) => {
    return {
        type: GENERATE_PASSWORD,
        payload: {
            name: name,
            range: range
        }
        // payload: length
    }
}
