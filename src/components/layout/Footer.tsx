import Image from "next/image"

export const Footer = () => {
  return (
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
  )
} 