export const formatCurreny = number => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)
}

export const formatPercent = (number, shouldIncludePlusSimbol) => {
  const formattedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(number)
  return number > 0 && shouldIncludePlusSimbol
    ? `+ ${formattedNumber}`
    : formattedNumber
}
