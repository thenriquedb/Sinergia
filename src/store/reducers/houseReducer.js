const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  rooms: [],
};

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms,
          {
            id: Math.random(),
            name: action.payload.name,
            totalKw: 10,
            totalAmount: 1.5,
            equipaments: [],
            equipmentHigherConsumption: '',
          },
        ],
      };
      break;

    default:
      return state;
  }
  return state;
}
