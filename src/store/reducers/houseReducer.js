import INITIAL_STATE from '../store/index';

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_VALUE_KW':
      return {
        ...state,
        dealership: {
          ...state.dealership,
          valorTarifaConvencional: action.payload.valorTarifaConvencional,
        }
      }

    case 'SET_ROOMS':
      return {
        ...state,
        rooms: action.payload.rooms
      }

    case 'SET_VALUE_KW_TARIFA_BRANCA':
      return {
        ...state,
        dealership: {
          ...state.dealership,
          valorPonta: action.payload.valorPonta,
          valorIntermediaria: action.payload.valorIntermediaria,
          valorForaPonta: action.payload.valorForaPonta,
        }
      }

    case 'SET_TARIFA':
      return {
        ...state,
        tarifa: action.payload.tarifa
      }

    case 'SET_UF':
      return {
        ...state,
        uf: action.payload.uf
      }

    case 'SET_DEALERSHIP':
      return {
        ...state,
        dealership: action.payload.dealership,
        dealershipBackup: action.payload.dealership
      }


    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [...state.rooms, action.payload.room],
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

    case 'EDIT_EQUIPMENT':

      return {
        ...state,
        rooms: state.rooms.map(item => {
          if (item.id === action.payload.idRoom) {
            item.equipments = item.equipments.map(equipment => {
              if (equipment.id === action.payload.idEquipment) {
                return {
                  ...equipment,
                  ...action.payload.newEquipment
                };
              } else {
                return equipment
              }
            });
            return item;
          } else {
            return item;
          }
        }),
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
            item.totalKw = action.payload.totalKwMonthly;
            return item;
          } else {
            return item;
          }
        }),
      };
      break;

    case 'SET_ROOM_MONTHLY_EXPENSES':
      return {
        ...state, rooms: state.rooms.map(item => {
          if (item.id === action.payload.idRoom) {
            item.tarifaConvencional.monthlyExpenses = action.payload.totalTarifaConvencional;
            item.tarifaBranca.monthlyExpenses = action.payload.totalTarifaBranca;
            return item;
          } else {
            return item;
          }
        }),
      };
      break;


    case 'SET_FIRST_USE_STATUS':
      return {
        ...state,
        firstUse: !state.firstUse
      }

    default:
      return state;
  }
}
