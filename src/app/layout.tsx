import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { MainLayout } from "@/components/layout/MainLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Intel Yield Report",
  description: "Intel Yield Report Web Application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
} 