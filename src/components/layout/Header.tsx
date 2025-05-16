'use client'

import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/common/NavigationMenu"
import { DateTime } from "@/components/common/DateTime"
import { useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-40 bg-cover bg-center">
        {/* Banner Image */}
        <img
          src="/Intel_Banner.png"
          alt="Intel Banner"
          className="w-full h-full object-cover"
        />

        {/* Light-to-Dark Gradient Overlay + Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-black/40 px-4 sm:px-6 flex items-center justify-end">
          <div className="text-white text-right">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              ATM YIELD
            </h1>
            <p className="text-sm sm:text-base md:text-xl">
              STRONG TOGETHER CREATE FUTURE
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between  items-center h-10">
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-cyan-600 text-sm"
                onClick={() => router.push('/home')}
              >
                HOME
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-cyan-600 text-sm"
              >
                YIELD KNOWLEDGE ONE1STOP
              </Button>
              <NavigationMenu />
            </div>
            <DateTime />
          </div>
        </div>
      </nav>
    </>
  );
};
