import { duration, isBetween, intervalsToArray } from "../time";

export default function onTimeAtEachInterval(intervals, startTimeWeekdays, endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours) {
  if (on24Hours) {
    startTimeWeekdays = `Tue Jan 28 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)`;
    endTimeWeekdays = `Tue Jan 28 2020 23:59:59 GMT-0300 (Horário Padrão de Brasília)`;

    startTimeWeekend = `Tue Jan 28 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)`;
    endTimeWeekend = `Tue Jan 28 2020 23:59:59 GMT-0300 (Horário Padrão de Brasília)`;
  }

  const { horarioPonta, horarioItermediario1, horarioIntermediario2 } = intervals;

  const format = "HH:mm";

  const intervalosHorarioPonta = intervalsToArray(horarioPonta, format);
  const intervalosHorarioIntermediario1 = intervalsToArray(horarioItermediario1, format);
  const intervalosHorarioIntermediario2 = horarioIntermediario2 ? intervalsToArray(horarioIntermediario2, format) : '';

  const ligadoHorarioIntermediario1 = isBetween(startTimeWeekdays, intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1], '[]');
  const ligadoHorarioPonta = isBetween(startTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioPonta[1], '()')
  const ligadoHorarioIntermediario2 = isBetween(startTimeWeekdays, intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1], '[]');
  const ligadoForaDePonta = !ligadoHorarioIntermediario1 && !ligadoHorarioPonta && !ligadoHorarioIntermediario2;

  const desligadoHorarioIntermediario1 = isBetween(endTimeWeekdays, intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1], '[]');
  const desligadoHorarioPonta = isBetween(endTimeWeekdays, intervalosHorarioPonta[0], intervalosHorarioPonta[1], '()')
  const desligadoHorarioIntermediario2 = isBetween(endTimeWeekdays, intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1], '[]');
  const desligadoForaDePonta = !desligadoHorarioIntermediario1 && !desligadoHorarioPonta && !desligadoHorarioIntermediario2;

  const ligadoEmTodasAsFaixas = isBetween(intervalosHorarioPonta[0], startTimeWeekdays, endTimeWeekdays);

  console.log("on24Hours: ", on24Hours);

  console.log("\n\n\nintervalosHorarioPonta: ", intervalosHorarioPonta)
  console.log("intervalosHorarioIntermediario1: ", intervalosHorarioIntermediario1)
  console.log("intervalosHorarioIntermediario2: ", intervalosHorarioIntermediario2)

  console.log("\n\nstartTimeWeekdays", startTimeWeekdays)
  console.log("endTimeWeekdays", endTimeWeekdays)

  console.log("\n\nstartTimeWeekend", startTimeWeekend)
  console.log("endTimeWeekend", endTimeWeekend)

  console.log("ligadoEmTodasAsFaixas", ligadoEmTodasAsFaixas);

  console.log("\n\nintervalosHorarioPonta: ", intervalosHorarioPonta)
  console.log("intervalosHorarioIntermediario1: ", intervalosHorarioIntermediario1)
  console.log("intervalosHorarioIntermediario2: ", intervalosHorarioIntermediario2)

  console.log("\n\nligadoHorarioIntermediario1: ", ligadoHorarioIntermediario1)
  console.log("ligadoHorarioPonta: ", ligadoHorarioPonta)
  console.log("ligadoHorarioIntermediario2: ", ligadoHorarioIntermediario2)
  console.log("ligadoForaDePonta: ", ligadoForaDePonta)

  console.log("\n\ndesligadoHorarioIntermediario1: ", desligadoHorarioIntermediario1)
  console.log("desligadoHorarioPonta: ", desligadoHorarioPonta)
  console.log("desligadoHorarioIntermediario2: ", desligadoHorarioIntermediario2)
  console.log("desligadoForaDePonta: ", desligadoForaDePonta)

  var tempoLigadoIntermediarioWeekdays = 0;
  var tempoLigadoPontaWeekdays = 0;
  var tempoLigadoForaDePontaWeekdays = 0;

  var tempoLigadoWeekend = 0;

  if (ligadoHorarioIntermediario1) {
    console.log("Ligado intermediario 1");

    if (desligadoHorarioIntermediario1) {
      console.log("desligado intermediario 1");
      tempoLigadoIntermediarioWeekdays = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
    }

    if (desligadoHorarioPonta) {
      console.log("desligado horario de ponta");
      tempoLigadoIntermediarioWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
      tempoLigadoPontaWeekdays = duration(intervalosHorarioPonta[0], endTimeWeekdays);
    }

    if (desligadoHorarioIntermediario2) {
      console.log("desligado intermediario 2");
      tempoLigadoIntermediarioWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[1]);
      tempoLigadoPontaWeekdays = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
      tempoLigadoIntermediarioWeekdays += duration(intervalosHorarioIntermediario2[0], endTimeWeekdays);
    }

    if (!desligadoHorarioIntermediario1 && !desligadoHorarioPonta && !desligadoHorarioIntermediario2) {
      console.log("desligado fora de ponta");

      // dias de semana
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
      tempoLigadoPontaWeekdays = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
      tempoLigadoIntermediarioWeekdays += duration(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);
      tempoLigadoForaDePontaWeekdays = duration(intervalosHorarioIntermediario2[1], endTimeWeekdays);
    }
  }

  if (ligadoHorarioPonta) {
    console.log("ligado horario de ponta");

    if (desligadoHorarioPonta) {
      console.log("desligado horario de ponta");
      tempoLigadoIntermediarioWeekdays = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
    }

    if (desligadoHorarioIntermediario2) {
      console.log("\ndesligado intermediario2\n");

      tempoLigadoPontaWeekdays = duration(startTimeWeekend, intervalosHorarioPonta[1]);
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario2[0], endTimeWeekend);
    }

    if (!desligadoHorarioIntermediario2 && !desligadoHorarioPonta) {
      console.log("desligado fora de ponta");
      tempoLigadoPontaWeekdays = duration(startTimeWeekend, intervalosHorarioPonta[1]);
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);
      tempoLigadoForaDePontaWeekdays = duration(intervalosHorarioIntermediario2[1], endTimeWeekend);
    }
  }

  if (ligadoHorarioIntermediario2) {
    console.log("ligado intermediario 2")
    if (desligadoHorarioIntermediario2) {
      console.log("desligado intermediario 2")
      tempoLigadoIntermediarioWeekdays = on24Hours ? 24 : duration(startTimeWeekdays, intervalosHorarioIntermediario2[1]);
    }
    else {
      console.log("desligado fora de PONTA")
      tempoLigadoIntermediarioWeekdays = on24Hours ? 24 : duration(startTimeWeekdays, intervalosHorarioIntermediario2[1]);
      tempoLigadoForaDePontaWeekdays = duration(intervalosHorarioIntermediario2[1], endTimeWeekdays);

      console.log("tempoLigadoForaDePontaWeekdays AAAAAAAAAAAA: ", tempoLigadoForaDePontaWeekdays);
    }
  }

  if (ligadoForaDePonta) {
    console.log("ligado fora de ponta")
    if (desligadoForaDePonta) {
      console.log("desligado fora de ponta")
      tempoLigadoForaDePontaWeekdays = duration(startTimeWeekdays, endTimeWeekdays);
    }

    if (desligadoHorarioIntermediario1) {
      console.log("desligado intermediario 1")
      tempoLigadoForaDePontaWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario1[0], endTimeWeekdays);
    }

    if (desligadoHorarioPonta) {
      console.log("desligado ponta")

      tempoLigadoForaDePontaWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
      tempoLigadoForaDePontaWeekdays = duration(intervalosHorarioPonta[0], endTimeWeekdays);
    }

    if (desligadoHorarioIntermediario2) {
      console.debug("desligado intermediario 2")

      tempoLigadoForaDePontaWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);
      tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
      tempoLigadoForaDePontaWeekdays = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
      tempoLigadoIntermediarioWeekdays += duration(intervalosHorarioIntermediario2[0], endTimeWeekdays);
    }
  }

  // if (ligadoEmTodasAsFaixas) {
  //   console.log("passa por todas as faixas")
  //   tempoLigadoForaDePontaWeekdays = duration(startTimeWeekdays, intervalosHorarioIntermediario1[0]);
  //   tempoLigadoIntermediarioWeekdays = duration(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  //   tempoLigadoPontaWeekdays = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
  //   tempoLigadoIntermediarioWeekdays += duration(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);
  //   tempoLigadoForaDePontaWeekdays += duration(intervalosHorarioIntermediario2[1], endTimeWeekdays);

  //   console.log("\ntempoLigadoForaDePontaWeekdays: ", tempoLigadoForaDePontaWeekdays)
  //   console.log("tempoLigadoIntermediarioWeekdays: ", tempoLigadoIntermediarioWeekdays)
  //   console.log("tempoLigadoPontaWeekdays: ", tempoLigadoPontaWeekdays)
  //   console.log("tempoLigadoIntermediarioWeekdays: ", tempoLigadoIntermediarioWeekdays)
  //   console.log("tempoLigadoForaDePontaWeekdays: \n", tempoLigadoForaDePontaWeekdays)

  //   tempoLigadoForaDePontaWeekend = duration(startTimeWeekend, intervalosHorarioIntermediario1[0]);
  //   tempoLigadoIntermediarioWeekend = duration(intervalosHorarioIntermediario1[0], intervalosHorarioIntermediario1[1]);
  //   tempoLigadoPontaWeekend = duration(intervalosHorarioPonta[0], intervalosHorarioPonta[1]);
  //   tempoLigadoIntermediarioWeekend += duration(intervalosHorarioIntermediario2[0], intervalosHorarioIntermediario2[1]);
  //   tempoLigadoForaDePontaWeekend += duration(intervalosHorarioIntermediario2[1], endTimeWeekend);

  //   console.log("\n\ntempoLigadoForaDePontaWeekend: ", tempoLigadoForaDePontaWeekend)
  //   console.log("tempoLigadoIntermediarioWeekend: ", tempoLigadoIntermediarioWeekend)
  //   console.log("tempoLigadoPontaWeekend: ", tempoLigadoPontaWeekend)
  //   console.log("tempoLigadoIntermediarioWeekend: ", tempoLigadoIntermediarioWeekend)
  //   console.log("tempoLigadoForaDePontaWeekend: ", tempoLigadoForaDePontaWeekend)
  // }

  tempoLigadoWeekend = duration(startTimeWeekend, endTimeWeekend);
  console.log("\n\ntempoLigadoForaDePontaWeekdays: ", tempoLigadoForaDePontaWeekdays)
  console.log("tempoLigadoIntermediarioWeekdays: ", tempoLigadoIntermediarioWeekdays)
  console.log("tempoLigadoPontaWeekdays: ", tempoLigadoPontaWeekdays)

  console.log("\n\ tempoLigadoWeekend: ", tempoLigadoWeekend)

  return {
    totalTimeWeekdays: {
      tempoLigadoForaDePontaWeekdays,
      tempoLigadoIntermediarioWeekdays,
      tempoLigadoPontaWeekdays
    },
    tempoLigadoWeekend
  }
}
