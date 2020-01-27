import moment from "moment"

function calculateDifferenceBetweenTwoTimes(initialHour, finalHour) {
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}

function isBetween(timeOrign, moment1, moment2) {
  return moment(timeOrign).isBetween(moment1, moment2);
}

function duration(initialHour, finalHour) {
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}


export default function calcTarifaBranca(kwMonthly, dealership, startTimeWeekdays, endTimeWeekdays, on24Hours) {
  let totalAPagar = 0;
  const { horarioPonta,
    horarioItermediario1,
    horarioIntermediario2,
    valorPonta,
    valorForaPonta,
    valorIntermediaria,
  } = dealership;

  const format = "HH:mm";

  // Armazena os intervalos
  const intervalosHorarioPonta = horarioPonta.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioIntermediario1 = horarioItermediario1.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioIntermediario2 = horarioIntermediario2 ? horarioIntermediario2.split("-").map(item => moment(item.trim(), format)) : '';

  // Duração de cada intervalo em horas
  const duracaoIntervaloPonta = calculateDifferenceBetweenTwoTimes(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
  const duracaoIntervaloIntermediario1 = calculateDifferenceBetweenTwoTimes(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  const duracaoIntervaloIntermediario2 = calculateDifferenceBetweenTwoTimes(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);

  // Em quais intervalos o equipamento fica ligado
  const ligadoHorarioIntermediario1 = isBetween(startTimeWeekdays, intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  const ligadoHorarioPonta = isBetween(startTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioPonta[1])
  const ligadoHorarioIntermediario2 = isBetween(startTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioIntermediario2[1]);

  const ligadoHorarioConvencional = !ligadoHorarioPonta && !horarioItermediario1 && !horarioIntermediario2;

  console.log("startTimeWeekdays: ", startTimeWeekdays);
  console.log("endTimeWeekdays: ", endTimeWeekdays);

  console.log("kwMonthly: ", kwMonthly)
  console.log("consesionaria: ", dealership);

  console.log("horarioItermediario1: ", horarioItermediario1)
  console.log("horarioPonta: ", horarioPonta)
  console.log("horarioIntermediario2: ", horarioIntermediario2)

  console.log("intervalosHorarioItermediario1: ", intervalosHorarioIntermediario1)
  console.log("intervalosHorarioPonta: ", intervalosHorarioPonta);
  console.log("intervalosHorarioItermediario2: ", intervalosHorarioIntermediario2)

  console.log("duracaoIntervaloIntermediario1: ", duracaoIntervaloIntermediario1);
  console.log("duracaoIntervaloPonta: ", duracaoIntervaloPonta);
  console.log("duracaoIntervaloIntermediario2: ", duracaoIntervaloIntermediario2);

  console.log("ligadoHorarioIntermediario1", ligadoHorarioIntermediario1);
  console.log("ligadoHorarioPonta", ligadoHorarioPonta);
  console.log("ligadoHorarioIntermediario2", ligadoHorarioIntermediario2);

  let totalTimeOn = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
  console.log("totalTimeOn", totalTimeOn);

  // Ligado apenas no horario de ponta
  if (ligadoHorarioPonta && !ligadoHorarioIntermediario1 && !ligadoHorarioIntermediario2) {
    console.log("Ligado apenas no horario de ponta")
    return totalTimeOn * dealership.valorPonta * kwMonthly;
  }

  // Ligado apenas em intermediario 1 ou  intermediario 2
  else if ((ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2)
    || (!ligadoHorarioIntermediario1 && !ligadoHorarioPonta && ligadoHorarioIntermediario2)) {
    console.log("Ligado apenas em intermediario 1")
    return totalTimeOn * valorIntermediaria * kwMonthly;
  }

  // Ligado apenas fora de ponta
  else if (!ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Fora da tarifa branca")
    return totalTimeOn * valorForaPonta * kwMonthly;
  }

  // Ligado em intermediario 1 e ponta
  if (ligadoHorarioIntermediario1 && ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado intermediario 1 e fora de ponta")
    let tempoIntermediario = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
    let totalIntermediario = tempoIntermediario * valorIntermediaria;
    totalTimeOn -= totalIntermediario;

    return totalIntermediario + (totalTimeOn * valorPonta) * kwMonthly;
  }

  // Ligado em intermediario 1, ponta e intermediario 2
  if (ligadoHorarioIntermediario1 && ligadoHorarioPonta && ligadoHorarioIntermediario2) {
    console.log("Ligado em intermediario 1, ponta e intermediario 2")

    let tempoIntermediario = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]) + duracaoIntervaloIntermediario2;
    let totalIntermediario = tempoIntermediario * valorIntermediaria;

    totalTimeOn -= totalIntermediario;
    let totalPonta = totalTimeOn * valorPonta;

    return totalIntermediario + totalPonta * kwMonthly;
  }

  // Ligado fora de ponta e intermediario 1
  if (ligadoHorarioConvencional && !ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado fora de ponta e intermediario 1")

    let tempoForaPonta = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);
    let totalForaDePonta = tempoForaPonta * valorForaPonta;

    return totalForaDePonta + ((totalTimeOn - tempoForaPonta) * valorIntermediaria) * kwMonthly;
  }

  // Ligado fora de ponta, intermediario 1 e ponta
  if (ligadoHorarioConvencional && ligadoHorarioIntermediario1 && ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado fora de ponta, intermediario 1 e ponta");
    let tempoForaPonta = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
    let totalForaDePonta = tempoForaPonta * valorForaPonta;

    let totalIntermediario = duracaoIntervaloIntermediario1 * valorIntermediaria;
    totalTimeOn -= duracaoIntervaloIntermediario1 + tempoForaPonta;
    totalPonta = totalTimeOn * valorPonta;

    return totalForaDePonta + totalIntermediario + totalPonta * kwMonthly;
  }

  //ligado em horario de ponta e intermediario 2
  if (!ligadoHorarioConvencional && !ligadoHorarioIntermediario1 && ligadoHorarioPonta && ligadoHorarioIntermediario2) {
    console.log("ligado em horario de ponta e intermediario 2 ");
    let tempoHorarioPonta = duration(startTimeWeekdays, intervalosHorarioPonta[1]);
    let totalHorarioPonta = tempoHorarioPonta * valorPonta;

    return totalHorarioPonta + ((totalTimeOn - totalHorarioPonta) * valorIntermediaria);
  }

  // Ligado em todas as 4 faixas
  if (ligadoHorarioConvencional && ligadoHorarioIntermediario1 && ligadoHorarioPonta && ligadoHorarioIntermediario2) {
    console.log("Ligado em todas as 4 faixas")

    let tempoForaPonta = duration(startTimeWeekdays, duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2
      + duracaoIntervaloPonta);

    let totalForaDePonta = tempoForaPonta * valorForaPonta;

    totalTimeOn -= tempoForaPonta;

    let totalIntermediario = (duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2) * valorIntermediaria;
    totalTimeOn -= duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2;

    let totalPonta = totalTimeOn * valorPonta;
    return totalForaDePonta + totalIntermediario + totalPonta * kwMonthly;
  }

  return totalAPagar;
}