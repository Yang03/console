const crypto = require('crypto');

export const genPassword = (password) => {
    const salt = crypto.randomBytes(8);
    return crypto.createHash('md5').update(password, 'utf8').digest('hex') + salt.toString('hex');
}

export const comparePassword = (genPassword, password) => {
   const gen =  genPassword.substr(0, 32);
   return gen === crypto.createHash('md5').update(password, 'utf8').digest('hex');
}