"use client"

import Image from "next/image"
import { MoreVertical } from "lucide-react"
import { formatDate, formatPrice, getCategoryColor, decodeHtmlEntities } from "@/lib/utils"
import type { Purchase } from "@/types/purchase"
import "./purchases-list.scss"

interface PurchasesListProps {
  purchases: Purchase[]
}

export function PurchasesList({ purchases = [] }: PurchasesListProps) {
  if (purchases.length === 0) {
    return <div className="purchases-list-empty">No purchases found.</div>
  }

  return (
    <div className="purchases-list">
      <div className="list-header">
        <div className="header-name">Name</div>
        <div className="header-location">Location</div>
        <div className="header-date">Purchase Date</div>
        <div className="header-category">Category</div>
        <div className="header-description">Description</div>
        <div className="header-price">Price</div>
        <div className="header-actions"></div>
      </div>
      {purchases.map((purchase) => (
        <div key={purchase.id} className="purchase-card">
          <div className="card-header">
            <div className="merchant">
              <div className="logo-container">
                <Image
                  src={purchase.location || "/placeholder.svg"}
                  alt={`${purchase.name} logo`}
                  fill
                  className="logo"
                />
              </div>
              <h3 className="name">{purchase.name}</h3>
            </div>
            <div className="desktop-location">
              <div className="logo-container">
                <Image
                  src={purchase.location || "/placeholder.svg"}
                  alt={`${purchase.name} logo`}
                  fill
                  className="logo"
                />
              </div>
            </div>
            <div className="date">
              <div className="label">Purchase Date</div>
              <div className="value">{formatDate(purchase.purchaseDate)}</div>
            </div>
            <div className="category">
              <span className={`category-tag ${getCategoryColor(purchase.category)}`}>{purchase.category}</span>
            </div>
            <div className="description">{decodeHtmlEntities(purchase.description)}</div>
            <div className="price">{formatPrice(purchase.price)}</div>
            <div className="actions">
              <button className="more-button">
                <MoreVertical className="more-icon" />
              </button>
            </div>
          </div>
          <div className="mobile-content">
            <p className="description">{decodeHtmlEntities(purchase.description)}</p>
            <div className="purchase-date">
              <div className="label">Purchase Date</div>
              <div className="value">{formatDate(purchase.purchaseDate)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

