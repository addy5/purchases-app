"use client"

import Image from "next/image"
import { MoreVertical } from "lucide-react"
import { formatDate, formatPrice, decodeHtmlEntities } from "@/helpers/formatHelper"
import { getCategoryColor } from "@/helpers/purchasesHelper"
import type { Purchase } from "@/types/purchase"
import { Button } from "@/components/button/button"
import "./purchases-list.scss"

interface PurchasesListProps {
  purchases: Purchase[]
}

export function PurchasesList({ purchases = [] }: PurchasesListProps) {
  if (purchases.length === 0) {
    return <div className="purchases-list-empty">No purchases found.</div>
  }

  const handleClick = () => {
    // TODO
    console.log("Clicked overflow");
  };

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
      {purchases.map((purchase, index) => (
        <div key={purchase.id} className="purchase-card">
          <div className="card-header">
            <div className="merchant">
              <div className="logo-container">
                <Image
                  src={purchase.location || "/placeholder.svg"}
                  alt={`${purchase.name} logo`}
                  fill
                  className="logo"
                  loading={index <= 1 ? "eager" : "lazy"}
                  sizes="(max-width: 1199px) 40px, 32px"
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
                  loading={index <= 1 ? "eager" : "lazy"}
                  sizes="32px"
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
              <Button type="button" className="more-button" onClick={(handleClick)}>
                <MoreVertical className="more-icon" />
              </Button>
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

