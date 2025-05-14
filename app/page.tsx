import { Button } from "@/components/ui/button"
import { DateTime } from "./components/DateTime"
import { NavigationMenu } from "./components/NavigationMenu"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="relative">
        <div className="h-48 bg-[url('/banner-bg.svg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900/30">
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between items-center text-white">
                <h1 className="text-4xl font-bold">ATM YIELD</h1>
                <p className="text-2xl">STRONG TOGETHER CREATE FUTURE IDK THÊM CÁI BANNER VÔ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-white hover:bg-cyan-600">
                HOME
              </Button>
              <Button variant="ghost" className="text-white hover:bg-cyan-600">
                YIELD KNOWLEDGE ONE1STOP
              </Button>
              <NavigationMenu />
            </div>
            <DateTime />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">WELCOME TO ATM YIELD!</h2>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl">
                Innovate our way to be the Factory of choice for the industry
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">MFG YIELD DB</h2>
              <div className="aspect-video bg-blue-200 flex items-center justify-center">
                Image of something here, could be the report or something else idk
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button variant="outline" className="text-gray-600">
                ASK ME
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white border-t">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>Intel Vietnam</div>
          <div className="text-gray-600">Intel Confidential</div>
          <div>
            <Image
              src="/intel-logo-2022.png"
              alt="Intel Logo"
              width={400}
              height={160}
              priority
              className="h-8 w-auto"
            />
          </div>
        </div>
      </footer>
    </main>
  )
}
