import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    token: "",    
    email: "",
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {        
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
            state.email = "";
        },        
    }
})

export const { logIn, signOut } = authSlice.actions

export default authSlice.reducer