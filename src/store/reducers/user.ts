interface userState {
  cnt: number;
}

const initialState: userState = {
  cnt: 0,
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cnt: state.cnt + 1,
      };
    case "CHANGE_CNT":
      return {
        ...state,
        cnt: action.payload,
      };
    default:
      return state;
  }
}
