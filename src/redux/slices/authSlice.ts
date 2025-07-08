import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/types";

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        userLogout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },
});

export const { setLoggedUser, userLogout } = authSlice.actions;
export default authSlice.reducer;
