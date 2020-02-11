import onTimeAtEachInterval from "./onTimeAtEachInterval";
import calcularKWMonthly from "./calcularKWMonthly";

export default function calcTarifaBranca(quantity, power, frequencyOfUseOnWeekdays, frequencyOfUseOnWeekend, dealership,
  startTimeWeekdays, endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours) {

  const {
    horarioPonta,
    horarioItermediario1,
    horarioIntermediario2,
    valorPonta,
    valorForaPonta,
    valorIntermediaria
  } = dealership;

  const { totalTimeWeekdays, tempoLigadoWeekend } = onTimeAtEachInterval({ horarioPonta, horarioItermediario1, horarioIntermediario2 },
    startTimeWeekdays, endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours);


  // Calcula a quantidade de KWh gasto em cada intervalos durante os dias de semana
  let kwGastoIntermediarioWeekdays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoIntermediarioWeekdays, frequencyOfUseOnWeekdays);
  let kwGastoPontaWeekdays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoPontaWeekdays, frequencyOfUseOnWeekdays);
  let kwGastoForaDePontaWeedays = calcularKWMonthly(power, quantity, totalTimeWeekdays.tempoLigadoForaDePontaWeekdays, frequencyOfUseOnWeekdays);

  // Calcula a quantidade de KWh gasto em cada intervalos durante o final de semana
  let kwGastoWeekend = calcularKWMonthly(power, quantity, tempoLigadoWeekend, frequencyOfUseOnWeekend);

  const totalAPagarSemana = (kwGastoIntermediarioWeekdays * valorIntermediaria) + (kwGastoPontaWeekdays * valorPonta) +
    (kwGastoForaDePontaWeedays * valorForaPonta);

  const totalAPagarFinalDeSemana = kwGastoWeekend * valorForaPonta;

  return totalAPagarFinalDeSemana + totalAPagarSemana;
}