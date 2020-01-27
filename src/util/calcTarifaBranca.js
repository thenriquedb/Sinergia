
import {
  calculateDifferenceBetweenTwoTimes,
  duration,
  isBetween,
  intervalsToArray
} from "./time";

export default function calcTarifaBranca(kwMonthly, dealership, startTimeWeekdays, endTimeWeekdays, on24Hours) {
  const {
    horarioPonta, horarioItermediario1, horarioIntermediario2,
    valorPonta, valorForaPonta, valorIntermediaria } = dealership;

  let totalAPagar = 0;
  let totalTimeOn = 0;

  const format = "HH:mm";

  // Armazena os intervalos
  const intervalosHorarioPonta = intervalsToArray(horarioPonta, format);
  const intervalosHorarioIntermediario1 = intervalsToArray(horarioItermediario1, format);
  const intervalosHorarioIntermediario2 = horarioIntermediario2 ? intervalsToArray(horarioIntermediario2, format) : '';


  console.log("intervalosHorarioItermediario1: ", intervalosHorarioIntermediario1)
  console.log("intervalosHorarioPonta: ", intervalosHorarioPonta);
  console.log("intervalosHorarioItermediario2: ", intervalosHorarioIntermediario2)

  const ligadoHorarioIntermediario1 = isBetween(startTimeWeekdays, intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  const ligadoHorarioPonta = isBetween(startTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioPonta[1])
  const ligadoHorarioIntermediario2 = isBetween(startTimeWeekdays, intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);

  const desligadoHorarioIntermediario1 = isBetween(endTimeWeekdays, intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  const desligadoHorarioPonta = isBetween(endTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioPonta[1])
  const desligadoHorarioIntermediario2 = isBetween(endTimeWeekdays, intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);

  console.log("startTimeWeekdays: ", startTimeWeekdays);
  console.log("endTimeWeekdays: ", endTimeWeekdays);

  if (ligadoHorarioIntermediario1) {
    console.log("Ligado intermediario");

    if (desligadoHorarioIntermediario1) {
      console.log("desligado intermediario 1");

      totalTimeOn = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
      totalAPagar = totalTimeOn * valorIntermediaria;
    }

    if (desligadoHorarioPonta) {
      console.log("desligado horario de ponta");

      let tempoLigadoIntermediario = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
      let tempoLigadoPonta = duration(intervalosHorarioPonta[0], endTimeWeekdays);

      totalAPagar = (tempoLigadoIntermediario * valorIntermediaria) + (tempoLigadoPonta * valorPonta);
    }

    if (desligadoHorarioIntermediario2) {
      console.log("desligado intermediario 2");

      let tempoLigadoIntermediario = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
      let tempoLigadoPonta = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
      let tempoLigadoIntermediario2 = duration(intervalosHorarioIntermediario2[0], endTimeWeekdays);

      totalAPagar = ((tempoLigadoIntermediario + tempoLigadoIntermediario2) * valorIntermediaria) +
        (tempoLigadoPonta * valorForaPonta);
    }

    if (!desligadoHorarioIntermediario1 && !desligadoHorarioPonta && !desligadoHorarioIntermediario2) {
      console.log("desligado fora de ponta");


      let tempoLigadoForaDePonta = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);

      let tempoLigadoIntermediario = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
      let tempoLigadoPonta = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
      let tempoLigadoIntermediario2 = duration(intervalosHorarioIntermediario2[0], endTimeWeekdays);

      totalAPagar = (tempoLigadoForaDePonta * valorForaPonta) +
        ((tempoLigadoIntermediario + tempoLigadoIntermediario2) * valorIntermediaria) +
        (tempoLigadoPonta * valorForaPonta);
    }
  }

  if (ligadoHorarioPonta) { }

  if (ligadoHorarioIntermediario2) { }

  if (!ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2) {
    // apenas fora de ponta
    if (!desligadoHorarioIntermediario1 && desligadoHorarioPonta && !desligadoHorarioIntermediario2) {
      totalTimeOn = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
      totalAPagar = totalTimeOn * valorForaPonta;
    }
  }




  // console.log("kwMonthly: ", kwMonthly)
  // console.log("consesionaria: ", dealership);

  // console.log("horarioItermediario1: ", horarioItermediario1)
  // console.log("horarioPonta: ", horarioPonta)
  // console.log("horarioIntermediario2: ", horarioIntermediario2)


  // console.log("duracaoIntervaloIntermediario1: ", duracaoIntervaloIntermediario1);
  // console.log("duracaoIntervaloPonta: ", duracaoIntervaloPonta);
  // console.log("duracaoIntervaloIntermediario2: ", duracaoIntervaloIntermediario2);

  // console.log("ligadoHorarioIntermediario1", ligadoHorarioIntermediario1);
  // console.log("ligadoHorarioPonta", ligadoHorarioPonta);
  // console.log("ligadoHorarioIntermediario2", ligadoHorarioIntermediario2);

  // console.log("totalTimeOn", totalTimeOn);

  return totalAPagar;
}