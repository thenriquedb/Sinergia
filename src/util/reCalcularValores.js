import calcTarifaConvencional from "./calcularTarifas/calcTarifaConvencional";
import calcTarifaBranca from "./calcularTarifas/calcTarifaBranca";

export default function reCalcularValores(rooms, dealership) {
  const { valorTarifaConvencional } = dealership;

  console.log("COMODO ", rooms[0])
  console.log("concessionaria: ", dealership)

  let roomsCopy = rooms.map(room => {
    room.equipments = room.equipments.map(equipment => {
      const { kwMonthly,
        quantity,
        power,
        frequencyOfUseOnWeekdays,
        frequencyOfUseOnWeekend,
        startTimeWeekdays,
        endTimeWeekdays,
        startTimeWeekend,
        endTimeWeekend,
        on24Hours } = equipment;

      equipment.tarifaConvencional.monthlyExpenses = calcTarifaConvencional(kwMonthly, valorTarifaConvencional)

      equipment.tarifaBranca.monthlyExpenses = calcTarifaBranca(
        quantity,
        power,
        frequencyOfUseOnWeekdays,
        frequencyOfUseOnWeekend,
        dealership,
        startTimeWeekdays,
        endTimeWeekdays,
        startTimeWeekend,
        endTimeWeekend,
        on24Hours);

      return equipment;
    });

    room.tarifaBranca.monthlyExpenses = room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaBranca.monthlyExpenses, 0)

    room.tarifaConvencional.monthlyExpenses = room.equipments.reduce((preVal, elem) =>
      preVal + elem.tarifaConvencional.monthlyExpenses, 0)

    return room;
  })


  roomsCopy.map(room => {



    return room;
  })

  console.log("rooms final: ", roomsCopy[0])

  return rooms;
}

