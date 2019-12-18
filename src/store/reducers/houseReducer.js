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
        rooms: state.rooms.map((item, index) => item.id == action.payload.id ?
          {
            ...item, name: action.payload.name,
            typeRoom: action.payload.typeRoom,
          } : item
        )
      }
      break;

    case 'CALCULATE_EXPENSES':
      return {
        ...state,
        rooms: state.rooms.map((item, index) => {
          if (item.id == action.payload.id) {
            return (state.rooms[index] = {
              ...item,
              tarifaConvencional: {
                kwMonthly: state.rooms[index].equipments.map((preVal, elem) => {
                  return (preVal + (elem.power * elem.numberDaysInOperation * elem.hoursOnPerDay));
                }, 0),
              },
            });
          } else {
            return state.rooms[index];
          }
        }),
      };
      break;

    default:
      return state;
  }
}