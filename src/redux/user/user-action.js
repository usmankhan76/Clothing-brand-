import UserActionTypes  from './user.types'


export const googleSignInStart=()=>({
       type:UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart=(emailAndPassword)=>({
       type:UserActionTypes.EMAIL_SIGN_IN_START,
       payload:emailAndPassword
})

export const SignInSuccess=(user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})
export const checkUserSession=()=>({
    type:UserActionTypes.CHECK_USER_SESSION,
})

export const SignInFailure=error=>({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:error
})

export const signOutStart=()=>({
    type:UserActionTypes.SIGN_OUT_START
})
export const signOutFailure=(error)=>({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
})
export const signOutSuccess=()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})
export const signUpStart=(userData)=>({
    type:UserActionTypes.SIGN_UP_START,
    payload:userData
})
export const singUpSuccess=({user,additionalData})=>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
})
export const signUpFailure=(error)=>({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:error
})




