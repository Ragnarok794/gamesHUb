
export const validation =(users, data)=>{

const isValidUser = users.some(element => {
    const values = Object.values(element);
    if (values.includes(data.user) || values.includes(data.email)) {
        return values.includes(data.password);
    }
    return false;
});
return isValidUser

}