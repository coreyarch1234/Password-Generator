export const GENERATE_PASSWORD = 'GENERATE_PASSWORD';

export const generatePassword = (length) => {
    return {
        type: GENERATE_PASSWORD,
        payload: length
    }
}
