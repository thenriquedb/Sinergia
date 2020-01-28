export default function calcularKWMonthly(power, quantity, totalTimeOn) {
  return (power * quantity * totalTimeOn * 30) / 1000;

}