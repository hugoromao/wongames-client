export default function formatPrice(price: number | bigint): string {
  if (price === 0) return 'GRÁTIS'

  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
