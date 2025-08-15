
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TokenizeX - Real Estate Tokenization Platform",
  description: "Unlock real estate liquidity through token swapping between Pakistan & Dubai",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
