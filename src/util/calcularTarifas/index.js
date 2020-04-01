import { duration } from '../time';

import calcTarifaConvencional from './calcTarifaConvencional';
import calcTarifaBranca from './calcTarifaBranca';
import calcularKWMonthly from './calcularKWMonthly';

export default function calcularTarifas(
  quantity,
  power,
  frequencyOfUseOnWeekdays,
  frequencyOfUseOnWeekend,
  dealership,
  startTimeWeekdays,
  endTimeWeekdays,
  startTimeWeekend,
  endTimeWeekend,
  on24Hours,
) {
  const totalTimeOn = on24Hours
    ? 24
    : duration(startTimeWeekdays, endTimeWeekdays);

  const totalTimeOnWeekend = on24Hours
    ? 24
    : duration(startTimeWeekend, endTimeWeekend);

  const kwWeekdays = calcularKWMonthly(
    power,
    quantity,
    totalTimeOn,
    frequencyOfUseOnWeekdays,
  );

  const kwWeekend = calcularKWMonthly(
    power,
    quantity,
    totalTimeOnWeekend,
    frequencyOfUseOnWeekend,
  );

  const kwMonthly = kwWeekdays + kwWeekend;

  const tarifaConvencional = calcTarifaConvencional(
    kwMonthly,
    dealership.valorTarifaConvencional,
  );

  const tarifaBranca = calcTarifaBranca(
    quantity,
    power,
    frequencyOfUseOnWeekdays,
    frequencyOfUseOnWeekend,
    dealership,
    startTimeWeekdays,
    endTimeWeekdays,
    startTimeWeekend,
    endTimeWeekend,
    on24Hours,
  );

  return {
    tarifaConvencional,
    tarifaBranca,
    kwMonthly,
    totalTimeOn,
  };
}
