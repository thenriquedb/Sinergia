const INITIAL_STATE = {
  totalKw: {},
  totalAmount: {},
  roomHigherConsumption: '',
  rooms: [
    {
      id: 75,
      name: 'Cômodo teste',
      typeRoom: 'Teste',
      totalKw: 0,
      totalAmount: 0,
      equipments: [
        {name: 'Microondas', id: 10, power: 1500, kwMensal: 0, mensalAmount: 0},
        {name: 'Geladeira', id: 20, power: 1500, kwMensal: 0, mensalAmount: 0},
        {name: 'Computador', id: 30, power: 1500, kwMensal: 0, mensalAmount: 0},
      ],
      equipmentHigherConsumption: '',
    },
  ],
};

export default INITIAL_STATE;
