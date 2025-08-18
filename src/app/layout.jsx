
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "TokenizeX - Real Estate Tokenization Platform",
  description: "Unlock real estate liquidity through token swapping between Pakistan & Dubai",
}

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
