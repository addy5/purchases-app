import "./globals.scss"

export const metadata = {
  title: "Multi-page Purchases App",
  description: "An app to manage and view purchases",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

