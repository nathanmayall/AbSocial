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
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(!email.match(regex)){
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
    }
} 