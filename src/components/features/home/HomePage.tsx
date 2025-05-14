import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";

export const HomePage = () => {
  return (
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
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              MFG YIELD DB
            </h2>
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
  );
};
