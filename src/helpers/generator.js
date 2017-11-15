//take in a password length and generate a password using a set symbol list

// module.exports = (passwordLength) => {
//
//     return 'THIsPassWrdIsdebst123';
// }

// export const RANGE_LONG = 26

// export const getRange = () => {
//     //..
// }


module.exports = (range) => {


    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    const passwordLength = alphabet.length;

    for (var i = 0; i < passwordLength; i++){
        var randIndex = Math.floor(Math.random() * (passwordLength - 1) + 1);
        let char = alphabet[randIndex];
        password += char;
        console.log(`the index character is: ${alphabet[randIndex]}`)
        console.log(char, randIndex, passwordLength);
    }
    console.log(`the password is: ${password}`)
    // return 'THIsPassWrdIsdebst123';
    return password
}

// import random
//
// alphabet = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// pw_length = 8
// mypw = ""
//
// for i in range(pw_length):
//     next_index = random.randrange(len(alphabet))
//     mypw = mypw + alphabet[next_index]
//
// print(mypw)
