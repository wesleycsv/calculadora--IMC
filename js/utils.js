export function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

export function validateNumber(number) {
  return isNaN(number) || number == ""
}
