import { PurchasesTable } from "./components/purchases-table"
import type { Purchase } from "@/types/purchase"

// Stub data matching the API response
const purchases: Purchase[] = [
  {
    id: 1,
    location: "https://picsum.photos/id/0/200",
    purchaseDate: "2020-12-27T00:00:00.000Z",
    category: "Food",
    description: "connecting the card won't do anything, we need to back up the digital HDD driver!",
    price: 99882,
    name: "auxiliary generating microchip",
  },
  {
    id: 2,
    location: "https://picsum.photos/id/1/200",
    purchaseDate: "2020-12-28T00:00:00.000Z",
    category: "Technology",
    description: "I'll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
    price: 69706,
    name: "1080p backing up port",
  },
]

export default function PurchasesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Purchases</h1>
      <PurchasesTable purchases={purchases} />
    </div>
  )
}

