import { createSlice } from '@reduxjs/toolkit';
import {NO_AVATAR} from "../../utils/constants";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        avatarUrl: NO_AVATAR
    },
    reducers: {
        updateUserAvatar: (state, action) => {
            state.avatarUrl = action.payload;
        },
    },
});

export const { updateUserAvatar } = userSlice.actions;
export default userSlice.reducer;
