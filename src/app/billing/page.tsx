"use client"

import { useState } from "react"
import "./billing-page.scss"

export default function PurchasesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  if (isLoading) {
    return <div className="billing-page">Loading your payment information...</div>
  }

  if (error) {
    return <div className="billing-page">Error: {error}</div>
  }

  return (
    <div className="billing-page">
      <h1>Billing</h1>
    </div>
  )
}
