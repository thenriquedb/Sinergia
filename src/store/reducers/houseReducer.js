const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  rooms: [],
};

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      console.log('Action type: ', action.type);
      console.log('Payload  name: ', action.payload.name);
      console.log('Payload type room: ', action.payload.typeRoom);
      return {
        ...state,
        rooms: [
          ...state.rooms,
          {
            id: Math.random(),
            name: action.payload.name,
            typeRoom: action.payload.typeRoom,
            totalKw: 0,
            totalAmount: 0,
            equipaments: [],
            equipmentHigherConsumption: '',
          },
        ],
      };
      break;

    case 'DELETE_ROOM':
      return {
        ...state,
        rooms: state.rooms.filter(item => item.id !== action.payload.id),
      };
      break;

    case 'EDIT_ROOM':
      console.log('edit');
      state.rooms.forEach((item, index) => {
        console.log('item.id: ' + item.id);
        console.log('action.id: ' + action.payload.id);
        if (item.id == action.payload.id) {
          console.log('éeeeeee igual!');
          state.rooms[index] = {
            ...item,
            name: action.payload.name,
            typeRoom: action.payload.typeRoom,
          };
        }
      });

    default:
      return state;
  }
}
