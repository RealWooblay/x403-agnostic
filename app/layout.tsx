import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "x402 Protocol | Money has been added to the internet",
  description:
    "x402 is the open protocol for streaming micro-payments over stablecoins. Chain-agnostic. Internet-native.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
