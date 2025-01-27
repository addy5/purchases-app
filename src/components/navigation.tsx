import Link from "next/link"
import "./navigation.scss"

export function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/purchases">Purchases</Link>
    </nav>
  )
}

