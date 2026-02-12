import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter', // slice 이름
    initialState,
    reducers: {
        //상태를 바꾸는 함수들
        increment: (state) => {
            state.value += 1; //immer가 불변성 자동 처리함.
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload; //payload 전달받은 값..
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

//actions와 reducer export
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;