function ceilAmount(amount = 0) {
  const value = Math.ceil(amount)
  const remainder = value % 10000

  return value < 0 ? 10000 : remainder === 0 ? value : value - remainder + 10000
}

export default function applyTaxToAmount(amount, taxValue, taxPercentage) {
  let taxedAmount = ceilAmount(amount)

  const PERCENTAGE_100 = 100000000

  if (taxValue > 0) taxedAmount += ceilAmount(taxValue)

  if (taxPercentage > 0) {
    taxedAmount = ceilAmount(
      (amount * PERCENTAGE_100) / (PERCENTAGE_100 - taxPercentage)
    )
  }

  return taxedAmount
}
