import INITIAL_STATE from '../store/index';

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms,
          {
            id: new Date().getTime().toString(),
            name: action.payload.name,
            typeRoom: action.payload.typeRoom,
            totalKw: 0,
            totalAmount: 0,
            equipments: [],
            equipmentHigherConsumption: '',

            tarifaBranca: {
              dailySpend: 0,
              kwDaily: 0,
            },

            tarifaConvencional: {
              dailySpend: 0,
              kwDaily: 0,
            },
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
      return {
        ...state,
        rooms: state.rooms.map((item, index) =>
          item.id == action.payload.id
            ? {
                ...item,
                name: action.payload.name,
                typeRoom: action.payload.typeRoom,
              }
            : item,
        ),
      };
      break;

    case 'ADD_EQUIPMENT':
      return {
        ...state,
        rooms: state.rooms.filter(item =>
          item.id === action.payload.id
            ? item.equipments.push(action.payload.newEquipment)
            : item,
        ),
      };
      break;

    case 'DELETE_EQUIPMENT':
      return {
        ...state,
        rooms: state.rooms.map(item => {
          if (item.id === action.payload.idRoom) {
            item.equipments = item.equipments.filter(equipment => {
              if (equipment.id !== action.payload.idEquipment) {
                return equipment;
              }
            });
            return item;
          } else {
            return item;
          }
        }),
      };
      break;

    case 'SET_ROOM_KW_MONTHLY':
      return {
        ...state,
        rooms: state.rooms.map(item => {
          if (item.id === action.payload.idRoom) {
            item.tarifaConvencional.kwMonthly = action.payload.totalKwMonthly;
            return item;
          } else {
            return item;
          }
        }),
      };
      break;

    case 'SET_ROOM_MONTHLY_EXPENSES':
      return {...state};
      break;

    default:
      return state;
  }
}
