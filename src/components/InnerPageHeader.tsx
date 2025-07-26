import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AppButton } from "./ui/app-button";

interface InnerPageHeaderProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const InnerPageHeader = ({ title, description, icon }: InnerPageHeaderProps) => {
  return (
    <div className="mt-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary to-gray-800 text-primary-foreground py-4 px-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AppButton 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-white hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </AppButton>
              
              <div className="font-doto text-xl font-bold">
                startupbg.com
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <AppButton 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-white hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/about">About</Link>
              </AppButton>
              
              <AppButton 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-white hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/correction">Submit</Link>
              </AppButton>
              
              <AppButton 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-white hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/sources">Source List</Link>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageHeader;
