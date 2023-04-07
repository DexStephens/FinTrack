import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Income {
  id: number;
  title: string;
  amount: number;
  weekly: boolean;
}

export interface IncomeState {
  incomes: Income[];
}

const initialState: IncomeState = {
  incomes: [],
};

const incomesSlice = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Income>) => {
      state.incomes.push(action.payload);
    },
    remove: (state, action: PayloadAction<Income>) => {
      state.incomes = state.incomes.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { add, remove } = incomesSlice.actions;
export default incomesSlice.reducer;
