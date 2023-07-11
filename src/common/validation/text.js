export const isEmail = (value) => {
    //Some custom rule here on value
    console.log(`validating ${value} as an email`);
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
}

export const isAddress = () => {
    //Some custom rule here on value
}

export const isPhone = () => {
    //Some custom rule here on value
    return false;
}

export default [isEmail, isAddress];
