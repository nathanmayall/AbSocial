module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = "Username can't be empty!";
    }
    if(email.trim() === ''){
        errors.email = "e-Mail can't be empty!";
    } else {
        const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(regEx)){
            errors.email = "e-Mail must be a valid address.";
        }
    }
    if(password === ''){
        errors.password = "Password can't be blank!";
    } else if(password !== confirmPassword){
        errors.confirmPassword = "Passwords must match!";
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = "Username can't be empty!";
    }
    if(password.trim() === ''){
        errors.username = "Password can't be empty!";
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    };
}