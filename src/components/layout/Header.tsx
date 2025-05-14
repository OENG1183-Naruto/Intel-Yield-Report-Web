import { Button } from "@/src/components/ui/button"
import { NavigationMenu } from "@/src/components/common/NavigationMenu"
import { DateTime } from "@/src/components/common/DateTime"

export const Header = () => {
  return (
    <>
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
    </>
  )
} 