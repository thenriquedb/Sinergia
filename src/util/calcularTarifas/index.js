import { duration } from "../time";

import calcTarifaConvencional from "./calcTarifaConvencional";
import calcTarifaBranca from "./calcTarifaBranca";
import calcularKWMonthly from "./calcularKWMonthly";
export default function calcularTarifas(
  quantity, power, frequencyOfUseOnWeekdays,
  frequencyOfUseOnWeekend, dealership, startTimeWeekdays,
  endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours) {

  const totalTimeOn = on24Hours ? 24 : duration(startTimeWeekdays, endTimeWeekdays);
  const kwMonthly = calcularKWMonthly(power, quantity, totalTimeOn);
  const tarifaConvencional = calcTarifaConvencional(kwMonthly, dealership.valorTarifaConvencional);


  const tarifaBranca = calcTarifaBranca(
    quantity, power, frequencyOfUseOnWeekdays,
    frequencyOfUseOnWeekend, dealership, startTimeWeekdays,
    endTimeWeekdays, startTimeWeekend, endTimeWeekend, on24Hours);

  return {
    tarifaConvencional,
    tarifaBranca,
    kwMonthly,
    totalTimeOn
  }
}