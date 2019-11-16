const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  rooms: [
    {
      id: '',
      name: 'Sala',
      totalKw: 20,
      equipmentHigherConsumption: {},
      totalAmount: 7.44,
      equipaments: [1, 2, 3, 4, 5],
    },
    {
      id: '',
      name: 'Cozinha',
      totalKw: 20,
      equipmentHigherConsumption: {},
      totalAmount: 14.1,
      equipaments: [1, 2, 3, 4, 5],
    },
    {
      id: '',
      name: 'Sala',
      totalKw: 20,
      equipmentHigherConsumption: {},
      totalAmount: 3.3,
      equipaments: [1, 2, 3, 4, 5],
    },
  ],
};

export default function houseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      console.log('ok');
      break;

    default:
      return state;
  }
}
