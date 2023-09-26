export const validateInput = (inputName, value, isTouch, setIsTouch, isValid, setIsValid) => {
    switch (inputName) {
        case 'name':
            setIsTouch({...isTouch, name: true})
            if (value.trim() === '' && isTouch.name === true) {
                setIsValid({...isValid, name:false})
            } else {
                setIsValid({...isValid, name:true})
            }
            return value;
        case 'phone':
            setIsTouch({...isTouch, phone: true})
            if (value.trim() === '' && isTouch.phone === true) {
                setIsValid({...isValid, phone:false})
            } else {
                setIsValid({...isValid, phone:true})
            }
            return value;
        case 'email':
            setIsTouch({...isTouch, email: true})
            if (value.trim() === '' && isTouch.email === true) {
                setIsValid({...isValid, email:false})
            } else {
                setIsValid({...isValid, email:true})
            }
            return value;
        case 'address':
            setIsTouch({...isTouch, address: true})
            if (value.trim() === '' && isTouch.address === true) {
                setIsValid({...isValid, address:false})
            } else {
                setIsValid({...isValid, address:true})
            }
            return value;
        case 'password':
            setIsTouch({...isTouch, password: true})
            if ((value.trim() === '' && isTouch.password === true) || value.length < 8 ) {
                setIsValid({...isValid, password:false})
            } else {
                setIsValid({...isValid, password:true})
            }
            return value;

        default:
            break;
    }
}



//validate 2

const validateName = (value) => {
    if (value.trim() === '' || value.length > 25) {
        return false;
    }
    return true;
}

const validateEmail = (value) => {
    if (value.trim() === '' || value.length > 30) {
        return false;
    }
    return true;
}

const validatePhone = (value) => {
    if (value.trim() === '' || value.length > 15) {
        return false;
    }
    return true;
}

const validatePassword = (value) => {
    if (value.trim() === '' || value.length < 8) {
        return false;
    }
    return true;
}



const validateAddress = (value) => {
    if (value.trim() === '') {
        return false;
    }
    return true;
}



const validateCity = (value) => {
    if (value.trim() === '' ) {
        return false;
    }
    return true;
}


export const validateInput2 = (inputName, value) => {
    switch (inputName) {
        case 'name': return validateName(value);
        case 'email': return validateEmail(value);
        case 'phone': return validatePhone(value);
        case 'password': return validatePassword(value);
        case 'address': return validateAddress(value);
        case 'city': return validateCity(value);
        
        default:
            break;
    }
}
