
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="min-h-screen bg-white mb-[50px]"> {/* Add padding-bottom equal to footer height */}
      <Header />
      <div className="container mx-auto px-4">
        {children}
      </div>
      <Footer /> {/* This stays fixed at bottom */}
    </main>
  )
}