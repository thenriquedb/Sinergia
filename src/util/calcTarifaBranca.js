import moment from "moment"


export default function calcTarifaBranca(
  kwMonthly, dealership, startTimeWeekdays, endTimeWeekdays, on24Hours) {


  const { horarioPonta, horarioItermediario1, horarioIntermediario2 } = props.dealership;
  const totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();

  const format = "HH:mm";

  const intervalosHorarioPonta = horarioPonta.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioItermediario1 = horarioItermediario1.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioIntermediario2 = horarioIntermediario2 ? horarioIntermediario2.split("-").map(item => moment(item.trim(), format)) : '';

  let totalAPagar = 0;
  // let totalTimeOn = 1;

  // esta entre dentro do horario de ponta
  if (moment(startTimeWeekdays).isBetween(intervalosHorarioPonta[0], intervalosHorarioPonta[1])
    && moment(endTimeWeekdays).isBetween(intervalosHorarioPonta[0], intervalosHorarioPonta[1])
  ) {
    totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();
    return totalTimeOn * dealership.valorPonta;
  }

  // esta entre dentro do intervalo intermediario 1
  else if (moment(startTimeWeekdays).isBetween(intervalosHorarioItermediario1[0], intervalosHorarioItermediario1[1])
    && moment(endTimeWeekdays).isBetween(intervalosHorarioItermediario1[0], intervalosHorarioItermediario1[1])
  ) {
    totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();
    return totalTimeOn * dealership.valorIntermediaria;
  }

  // esta entre dentro do intervalo intermediario 1
  else if (moment(startTimeWeekdays).isBetween(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1])
    && moment(endTimeWeekdays).isBetween(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1])
  ) {
    totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();
    return totalTimeOn * dealership.valorIntermediaria;
  }

  else {
    totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();
    return totalTimeOn * dealership.valorTarifaConvencional;
  }


  console.log("horarioPonta: ", intervalosHorarioPonta)
  console.log("startTimeWeekdays: ", startTimeWeekdays)

  return totalAPagar;
}