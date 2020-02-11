export default function calcularKWMonthly(power, quantity, totalTimeOn, frequency = 1) {
  return ((power * quantity * totalTimeOn * frequency) * 4) / 1000;
}