export default function calcularKWMonthly(
  power,
  quantity,
  totalTimeOn,
  frequency = 1,
) {
  // 4.29 é para corresponder a um mes de 30 dias, já que utilizando apenas 4
  // tava sendo considerado um mês de 28 dias
  return (power * quantity * totalTimeOn * frequency * 4.29) / 1000;
}
