export default function formatPrice(price: number, fractionDigits: number = 2) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: fractionDigits,
  }).format(price);
}
