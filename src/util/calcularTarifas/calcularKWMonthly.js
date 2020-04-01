export default function calcularKWMonthly(
  power,
  quantity,
  totalTimeOn,
  frequency = 1,
) {
  const consumoSemanal = power * quantity * totalTimeOn * frequency;
  const total = ((consumoSemanal / 7) * 30) / 1000;

  return total;
}
