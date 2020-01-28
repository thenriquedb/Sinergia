import onTimeAtEachInterval from "./onTimeAtEachInterval";
import calcularKWMonthly from "./calcularKWMonthly";

export default function calcTarifaBranca(quantity, power, frequencyOfUseOnWeekdays,
  frequencyOfUseOnWeekend,
  dealership,
  startTimeWeekdays,
  endTimeWeekdays,
  startTimeWeekend,
  endTimeWeekend,
  on24Hours) {

  const {
    horarioPonta, horarioItermediario1, horarioIntermediario2,
    valorPonta, valorForaPonta, valorIntermediaria } = dealership;

  let totalAPagarSemana = 0;
  let totalAPagarFinalDeSemana = 0;

  const tempoLigadoPorIntervalo = onTimeAtEachInterval({ horarioPonta, horarioItermediario1, horarioIntermediario2 },
    startTimeWeekdays, endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours);

  const { totalTimeWeekdays, totalTimeWeekend } = tempoLigadoPorIntervalo;

  // Calcula a quantidade de KWh gasto em cada intervalos durante os dias de semana
  let kwGastoIntermediarioWeekdays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoIntermediarioWeekdays);
  let kwGastoPontaWeekdays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoPontaWeekdays);
  let kwGastoForaDePontaWeedays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoForaDePontaWeekdays);


  // Calcula a quantidade de KWh gasto em cada intervalos durante o final de semana
  let kwGastoIntermediarioWeekend = calcularKWMonthly(power, quantity, totalTimeWeekend.tempoLigadoIntermediarioWeekend);
  let kwGastoPontaWeekend = calcularKWMonthly(power, quantity, totalTimeWeekend.tempoLigadoPontaWeekend);
  let kwGastoForaDePontaWeekend = calcularKWMonthly(power, quantity, totalTimeWeekend.tempoLigadoForaDePontaWeekend);

  totalAPagarSemana = ((kwGastoIntermediarioWeekdays * valorIntermediaria) +
    (kwGastoPontaWeekdays * valorPonta) +
    (kwGastoForaDePontaWeedays * valorForaPonta)) * frequencyOfUseOnWeekdays;

  totalAPagarFinalDeSemana = ((kwGastoIntermediarioWeekend + kwGastoPontaWeekend + kwGastoForaDePontaWeekend) * valorForaPonta) * frequencyOfUseOnWeekend;

  return totalAPagarFinalDeSemana + totalAPagarSemana;
}