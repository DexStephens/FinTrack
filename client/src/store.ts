import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/user/usersSlice';
import incomesReducer from '../src/income/incomesslice';
import expensesReducer from '../src/expenses/expensesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    incomes: incomesReducer,
    expenses: expensesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
