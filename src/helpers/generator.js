

const getRange = (range) => {
    switch(range){
        case 'rangeShort':
            //password length between 6 and 8
            return Math.floor(Math.random() * (8 - 4) + 4);
        case 'rangeMedium':
            //password length between 9 and 12
            return Math.floor(Math.random() * (13 - 9) + 9);
        case 'rangeLong':
            //password length between 13 and 18
            return Math.floor(Math.random() * (17 - 13) + 13);
        default:
            return 8
    }

}

export const generateMethodOne = (range) => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+';
    var passwordLength = getRange(range);
    console.log(`the password length is: ${range}`);
    console.log(`the password range number is: ${passwordLength}`);


    let password = '';

    for (var i = 0; i < passwordLength; i++){
        var min = passwordLength - 4;
        var max = passwordLength;

        var randIndex = Math.floor(Math.random() * (max - min) + min);

        let char = alphabet[randIndex];

        password += char;

    }

    return password

}



export const generateMethodTwo = (range) => {
    String.prototype.hashCode = function(){
    	var hash = 0;
    	if (this.length == 0) return hash;
    	for (var i = 0; i < this.length; i++) {
    		var char = this.charCodeAt(i);
    		var hash = ((hash<<5)-hash)+char;
    		hash = hash & hash; // Convert to 32bit integer
    	}
    	return hash;
    }

    var methodOnePassword = generateMethodOne(range);
    return methodOnePassword.hashCode();
}
