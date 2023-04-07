import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Expense {
  id: number;
  title: string;
  amount: number;
  occured: Date;
}

export interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    remove: (state, action: PayloadAction<Expense>) => {
      state.expenses = state.expenses.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { add, remove } = expensesSlice.actions;
export default expensesSlice.reducer;
