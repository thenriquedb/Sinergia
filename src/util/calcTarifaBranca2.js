import moment from "moment"


export default function calcTarifaBranca(kwMonthly, dealership, startTimeWeekdays, endTimeWeekdays, on24Hours) {

  let totalAPagar = 40;
  const { horarioPonta, horarioItermediario1, horarioIntermediario2 } = dealership;

  const format = "HH:mm";

  // Armazena os intervalos
  const intervalosHorarioPonta = horarioPonta.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioIntermediario1 = horarioItermediario1.split("-").map(item => moment(item.trim(), format));
  const intervalosHorarioIntermediario2 = horarioIntermediario2 ? horarioIntermediario2.split("-").map(item => moment(item.trim(), format)) : '';

  // Duração de cada intervalo em horas
  const duracaoIntervaloPonta = Math.abs(moment.duration(moment(intervalosHorarioPonta[0]).diff(intervalosHorarioPonta[1])).asHours());
  const duracaoIntervaloIntermediario1 = Math.abs(moment.duration(moment(intervalosHorarioIntermediario1[0]).diff(intervalosHorarioIntermediario1[1])).asHours());
  const duracaoIntervaloIntermediario2 = Math.abs(moment.duration(moment(intervalosHorarioIntermediario2[0]).diff(intervalosHorarioIntermediario2[1])).asHours());

  // Em quais intervalos o equipamento fica ligado
  const ligadoHorarioPonta = moment(startTimeWeekdays).isBetween(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
  const ligadoHorarioIntermediario1 = moment(startTimeWeekdays).isBetween(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  const ligadoHorarioIntermediario2 = moment(startTimeWeekdays).isBetween(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);
  const ligadoHorarioConvencional = !ligadoHorarioPonta && !horarioItermediario1 && !horarioIntermediario2;

  console.log("kwMonthly: ", kwMonthly)

  console.log("horarioPonta: ", horarioPonta)
  console.log("horarioItermediario1: ", horarioItermediario1)
  console.log("horarioIntermediario2: ", horarioIntermediario2)

  console.log("intervalosHorarioPonta: ", intervalosHorarioPonta);
  console.log("intervalosHorarioItermediario1: ", intervalosHorarioIntermediario1)
  console.log("intervalosHorarioItermediario2> ", intervalosHorarioIntermediario2)

  console.log("duracaoIntervaloIntermediario1: ", duracaoIntervaloIntermediario1);
  console.log("duracaoIntervaloPonta: ", duracaoIntervaloPonta);
  console.log("duracaoIntervaloIntermediario2: ", duracaoIntervaloIntermediario2);

  console.log("ligadoHorarioPonta", ligadoHorarioPonta);
  console.log("ligadoHorarioIntermediario1", ligadoHorarioIntermediario1);
  console.log("ligadoHorarioIntermediario2", ligadoHorarioIntermediario2);

  let totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();


  // Ligado apenas no horario de ponta
  if (ligadoHorarioPonta && !ligadoHorarioIntermediario1 && !ligadoHorarioIntermediario2) {
    console.log("Ligado apenas no horario de ponta")
    return totalTimeOn * dealership.valorPonta;
  }

  // Ligado apenas em intermediario 1 ou  intermediario 2
  if ((ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2)
    || (!ligadoHorarioIntermediario1 && !ligadoHorarioPonta && ligadoHorarioIntermediario2)) {
    console.log("Ligado apenas em intermediario 1")
    return totalTimeOn * dealership.valorIntermediaria;
  }


  // Ligado apenas fora de ponta
  if (!ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Fora da tarifa branca")
    return totalTimeOn * dealership.valorForaPonta;
  }

  // Ligado em intermediario 1 e ponta
  if (ligadoHorarioIntermediario1 && ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado intermediario 1 e fora de ponta")
    return (duracaoIntervaloIntermediario1 * dealership.valorIntermediaria) + ((totalTimeOn - duracaoIntervaloIntermediario1) * dealership.valorForaPonta)
  }

  // Ligado em intermediario 1, ponta e intermediario 2
  if (ligadoHorarioIntermediario1 && ligadoHorarioPonta && ligadoHorarioIntermediario2) {
    console.log("Ligado em intermediario 1, ponta e intermediario 2")

    let totalIntermediario = (duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2) * dealership.valorIntermediaria;
    totalTimeOn -= (duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2);
    let totalPonta = totalTimeOn * dealership.valorPonta;

    return totalIntermediario + totalPonta;
  }

  // Ligado fora de ponta e intermediario 1
  if (ligadoHorarioConvencional && !ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado fora de ponta e intermediario 1")
    let tempoForaPonta = on24Hours ? 24 : moment.duration(moment(startTimeWeekdays).diff(intervalosHorarioIntermediario1[0])).asHours();
    let totalForaDePonta = tempoForaPonta * dealership.valorForaPonta;
    return totalForaDePonta + ((totalTimeOn - totalForaDePonta) * dealership.valorIntermediaria);
  }

  // Ligado fora de ponta, intermediario 1 e ponta
  if (ligadoHorarioConvencional && ligadoHorarioIntermediario1 && ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    console.log("Ligado fora de ponta, intermediario 1 e ponta")
    let tempoForaPonta = on24Hours ? 24 : moment.duration(moment(startTimeWeekdays).diff(intervalosHorarioIntermediario1[0])).asHours();
    let totalForaDePonta = tempoForaPonta * dealership.valorForaPonta;

    totalTimeOn -= tempoForaPonta;


  }


  // Ligado em todas as 4 faixas
  if (ligadoHorarioConvencional && ligadoHorarioIntermediario1 && ligadoHorarioPonta && ligadoHorarioIntermediario2) {
    console.log("Ligado em todas as 4 faixas")
    totalTimeOn = on24Hours ? 24 : moment.duration(moment(endTimeWeekdays).diff(startTimeWeekdays)).asHours();

    let tempoForaPonta = totalTimeOn - (duracaoIntervaloIntermediario1 + duracaoIntervaloPonta + duracaoIntervaloIntermediario2);
    let totalForaDePonta = tempoForaPonta * dealership.valorForaPonta;

    totalTimeOn -= tempoForaPonta;

    let totalIntermediario = (duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2) * dealership.valorIntermediaria;
    totalTimeOn -= duracaoIntervaloIntermediario1 + duracaoIntervaloIntermediario2;

    let totalPonta = totalTimeOn * dealership.valorPonta;
    return totalForaDePonta + totalIntermediario + totalPonta;
  }


  return totalAPagar;
}

//  fora de ponta + intermdiario 1
//  intermdiario 1 + fora de ponta

// Apenas intermediario 1
// Apenas ponta
// Apenas intermediario 2
// Apenas fora dos intervalos

// Intermediario 1 - Ponta
// Ponta - Intermediario 2

// duracaoPrimeira * valorPrimeira + ( tTotal - duracaoPrimeira * valorSegunda )
// -----------------------

// Intermediario 1 - Intermediario 2 - Ponta



// 1. Verificar em qual faixa o equipamento é ligado;
// 2. Verificar em qual faixa o equipamento é desligado