import { Header } from "@/src/components/layout/Header"
import { Footer } from "@/src/components/layout/Footer"

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