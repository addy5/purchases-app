import "./home.scss"
import Link from "next/link"


export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to our Test App</h1>
      <p>
        This page is not currently in scope.
        <br />
        <br />
        Please navigate to the{" "}
        <Link href="/purchases" className="purchases-link">
          Purchases
        </Link>{" "}
        page to view your purchases.
      </p>
    </div>
  )
}

