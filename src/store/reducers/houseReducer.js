import INITIAL_STATE from '../store/index';

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms,
          {
            id: Date.getTime(),
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
    case 'GET_EQUIPMENTS':
      console.log('roomId: ', action.payload.roomId);
      return state.rooms[0].equipments;
      // return state.rooms.find(room => room.id === action.payload.roomId);
      break;

    default:
      return state;
  }
}
