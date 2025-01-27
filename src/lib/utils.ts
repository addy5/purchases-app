export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price)
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    Technology: "blue",
    Food: "green",
    Shopping: "purple",
    Entertainment: "yellow",
    Automotive: "red",
  }
  return colors[category] || "gray"
}

