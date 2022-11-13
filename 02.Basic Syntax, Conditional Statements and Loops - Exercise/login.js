function solve(params) {
    let userName = params.shift();
    let loginAttempt = 1;
    
    for (let i = 0; i < params.length; i++) {
        let reversed = params[i].split('').reverse().join('');
        
        if (userName == reversed) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {

            if (loginAttempt > 3) {
            console.log(`User ${userName} blocked!`);
            break;
            }

            console.log('Incorrect password. Try again.');
        }
        loginAttempt++;
    }
}