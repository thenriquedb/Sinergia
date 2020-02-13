
export function moneyMask(string) {
  return `R$ ${string.toFixed(2).toString().replace('.', ',')}`
}

export function kwMask(string) {
  return `${string.toFixed(2)} KWh`;
}

export function intervalMask(string) {
  const intervals = string.split("-").map(item => item.trim());
  return `${intervals[0]}h ás ${intervals[1]}h`;
}