const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  roomHigherConsumption: '',

  tarifaBranca: {
    dailySpend: 0,
    kwMonthly: 0,
    equipmentHigherConsumption: '',
  },

  tarifaConvencional: {
    dailySpend: 0,
    kwMonthly: 0,
    equipmentHigherConsumption: '',
  },

  rooms: [
    {
      id: 75,
      name: 'Cômodo teste',
      typeRoom: 'bedroom',
      totalKw: 0,
      totalAmount: 0,

      tarifaBranca: {
        monthlySpend: 0,
        kwMonthly: 0,
        equipmentHigherConsumption: '',
      },

      tarifaConvencional: {
        dailySpend: 0,
        kwMonthly: 0,
        monthlySpend: 0,
        equipmentHigherConsumption: '',
      },

      equipments: [
        {
          name: 'Microondas',
          id: 10,
          power: 1500,
          kwMonthly: 10,
          dayAmount: 0.5,
          numberDaysInOperation: 4,
          hoursOnPerDay: 2,
        },
        {
          name: 'Geladeira',
          id: 20,
          power: 1200,
          kwMonthly: 0,
          dayAmount: 0,
          hoursOnPerDay: 2,
          numberDaysInOperation: 7,
        },
        {
          name: 'Computador',
          id: 30,
          power: 1550,
          kwMonthly: 0,
          dayAmount: 0,
          hoursOnPerDay: 2,
          numberDaysInOperation: 7,
        },

        {
          name: 'Lampâda',
          id: 50,
          power: 400,
          kwMonthly: 0,
          dayAmount: 0,
          hoursOnPerDay: 2,
          numberDaysInOperation: 7,
        },
      ],
      equipmentHigherConsumption: '',
    },
  ],
};

export default INITIAL_STATE;
