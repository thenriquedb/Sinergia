const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  roomHigherConsumption: '',

  tarifaBranca: {
    monthlySpend: 0,
    dailySpend: 0,
    weeklySpend: 0,
    annualSpend: 0,
    kwMonthly: 0,
    kwDaily: 0,
    kwWeekly: 0,
    equipmentHigherConsumption: '',
  },

  tarifaConvencional: {
    monthlySpend: 0,
    dailySpend: 0,
    weeklySpend: 0,
    annualSpend: 0,
    kwMonthly: 0,
    kwDaily: 0,
    kwWeekly: 0,
    equipmentHigherConsumption: '',
  },

  rooms: [
    {
      id: 75,
      name: 'Cômodo teste',
      typeRoom: 'Teste',
      totalKw: 47,
      totalAmount: 0,
      tarifaBranca: {
        monthlySpend: 0,
        dailySpend: 0,
        weeklySpend: 0,
        annualSpend: 0,
        kwMonthly: 0,
        kwDaily: 0,
        kwWeekly: 0,
        equipmentHigherConsumption: '',
      },

      tarifaConvencional: {
        monthlySpend: 0,
        dailySpend: 0,
        weeklySpend: 0,
        annualSpend: 0,
        kwMonthly: 0,
        kwDaily: 0,
        kwWeekly: 0,
        equipmentHigherConsumption: '',
      },

      equipments: [
        {
          name: 'Microondas',
          id: 10,
          power: 1500,
          kwDay: 10,
          dayAmount: 0.5,
          numberDaysinOperation: 4,
        },
        {
          name: 'Geladeira',
          id: 20,
          power: 1200,
          kwDay: 0,
          dayAmount: 0,
          numberDaysinOperation: 7,
        },
        {
          name: 'Computador',
          id: 30,
          power: 1550,
          kwDay: 0,
          dayAmount: 0,
          numberDaysinOperation: 7,
        },
        {
          name: 'Televisão',
          id: 40,
          power: 500,
          kwDay: 0,
          dayAmount: 4,
          numberDaysinOperation: 7,
        },
        {
          name: 'Lampâda',
          id: 50,
          power: 400,
          kwDay: 0,
          dayAmount: 0,
          numberDaysinOperation: 7,
        },
      ],
      equipmentHigherConsumption: '',
    },
  ],
};

export default INITIAL_STATE;
