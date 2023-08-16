import { createSelector } from '@reduxjs/toolkit';
import {AuthState} from "./authSlice";

export const selectIsLoggedIn = createSelector(
    (state: { auth: AuthState }) => state.auth.user,
    (user) => user !== null
);
