"use client"

import { useState } from "react"
import "./billing-page.scss"

export default function PurchasesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  if (isLoading) {
    return <div className="purchases-page">Loading your payment information...</div>
  }

  if (error) {
    return <div className="purchases-page">Error: {error}</div>
  }

  return (
    <div className="purchases-page">
      <h1>Billing</h1>
    </div>
  )
}
