import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    assign: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    remove: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { assign, remove } = userSlice.actions;
export default userSlice.reducer;
