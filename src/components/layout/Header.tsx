'use client'

import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/common/NavigationMenu"
import { DateTime } from "@/components/common/DateTime"
import { useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()

  return (
    <>
      {/* Header Banner */}
      <div className="relative">
        <div className="h-40 bg-[url('/banner-bg.svg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900/30">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center text-white">
                <h1 className="text-3xl font-bold">ATM YIELD</h1>
                <p className="text-xl">STRONG TOGETHER CREATE FUTURE IDK THÊM CÁI BANNER VÔ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-cyan-600 text-sm"
                onClick={() => router.push('/home')}
              >
                HOME
              </Button>
              <Button variant="ghost" className="text-white hover:bg-cyan-600 text-sm">
                YIELD KNOWLEDGE ONE1STOP
              </Button>
              <NavigationMenu />
            </div>
            <DateTime />
          </div>
        </div>
      </nav>
    </>
  )
}