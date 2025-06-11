import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AppButton } from "./ui/app-button";

interface InnerPageHeaderProps {
  title?: string;
}

const InnerPageHeader = ({ title }: InnerPageHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-primary to-gray-800 text-primary-foreground py-4 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <AppButton 
              variant="ghost" 
              size="sm" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </AppButton>
          </div>
          
          <div className="font-doto text-2xl font-bold">
            startupbg.com
          </div>
          
          {title && (
            <div className="hidden md:block text-lg opacity-80">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerPageHeader;
