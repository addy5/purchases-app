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
