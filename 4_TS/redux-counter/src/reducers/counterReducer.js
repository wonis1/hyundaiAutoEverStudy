// 초기 상태
const initialState = {
    value: 0
};

//Reducer 함수
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/increment':
            return {
                value: state.value + 1
            }
        case 'counter/decrement':
            return {
                value: state.value - 1
            }
        case 'counter/reset':
            return {
                value: 0
            }
            
        default:
            return state;
    }   
}