export function moneyMask(string) {
  return `R$ ${string.toFixed(2).toString().replace('.', ',')}`
}

export function kwMask(string) {
  return `${string.toFixed(1)} KW`;
}