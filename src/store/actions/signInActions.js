export const NEW_SIGN_IN = "NEW_SIGN_IN"
export const NEW_SIGN_OUT = "NEW_SIGN_OUT"



export function signIn(user){
    return {
        type : NEW_SIGN_IN,
        payload : user
    }
}

export function signOut(){
    return {
        type : NEW_SIGN_OUT,
        payload : {mail:'',password:''}
    }
}
