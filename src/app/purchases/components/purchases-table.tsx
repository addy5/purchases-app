"use client"

import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import { formatDate, formatPrice, getCategoryColor } from "@/lib/utils"
import type { Purchase } from "@/types/purchase"
import "./purchases-table.scss"

interface PurchasesTableProps {
  purchases: Purchase[]
}

export function PurchasesTable({ purchases = [] }: PurchasesTableProps) {
  return (
    <div className="purchases-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Purchase Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td className="name">{purchase.name}</td>
              <td className="location">
                <div className="image-container">
                  <Image
                    src={purchase.location || "/placeholder.svg"}
                    alt={`${purchase.name} logo`}
                    fill
                    className="rounded-image"
                  />
                </div>
              </td>
              <td>{formatDate(purchase.purchaseDate)}</td>
              <td>
                <span className={`category ${getCategoryColor(purchase.category)}`}>{purchase.category}</span>
              </td>
              <td className="description">
                <p>{purchase.description}</p>
              </td>
              <td className="price">{formatPrice(purchase.price)}</td>
              <td>
                <button className="more-button">
                  <MoreHorizontal className="more-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

