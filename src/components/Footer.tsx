
import { AppButton } from "@/components/ui/app-button";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/sources">
                Full Source List
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm" asChild>
              <RouterLink to="/correction">
                Submit a Correction
              </RouterLink>
            </AppButton>
            <AppButton variant="ghost" size="sm">
              Data Methodology
            </AppButton>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built by{" "}
            <AppButton variant="ghost" className="p-0 h-auto font-medium" asChild>
              <a href="#" className="text-primary hover:underline">
                Vasil Nedelchev
              </a>
            </AppButton>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>
            Last updated: December 2024 • Data sources: Public records, VC reports, 
            company websites, and industry surveys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
