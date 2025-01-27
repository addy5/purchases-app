"use client"

import { useState, useEffect } from "react"
import { PurchasesTable } from "./components/purchases-table"
import type { Purchase } from "@/types/purchase"
import { fetchPurchases } from "@/services/purchaseService"
import "./purchases-page.scss"

export default function PurchasesPage() {
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPurchases() {
      try {
        const data = await fetchPurchases()
        setPurchases(data)
        setIsLoading(false)
      } catch (err) {
        setError("Failed to load purchases. Please try again later.")
        setIsLoading(false)
      }
    }

    loadPurchases()
  }, [])

  if (isLoading) {
    return <div className="purchases-page">Loading purchases...</div>
  }

  if (error) {
    return <div className="purchases-page">Error: {error}</div>
  }

  return (
    <div className="purchases-page">
      <h1>Purchases</h1>
      <PurchasesTable purchases={purchases} />
    </div>
  )
}
