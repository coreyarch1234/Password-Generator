export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

export const generatePassword = (length, name, range) => {
    return {
        type: GENERATE_PASSWORD,
        payload: {
            length: length,
            name: name,
            range: range
        }
        // payload: length
    }
}
