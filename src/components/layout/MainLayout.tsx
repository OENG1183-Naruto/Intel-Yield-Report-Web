import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  )
} 